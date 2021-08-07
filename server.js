const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection')
const helpers = require('./utils/auth')
const Handlebars = require('handlebars')

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// creates connection to the server
const app = express();
const PORT = process.env.PORT || 3001;
// if there are more helpers
const hbs = exphbs.create({ helpers });

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true, 
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

Handlebars.registerPartial('comment','{{comment}}');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// force true/false to reset sequelize table data
sequelize.sync({ force : false }).then( () => {
    app.listen(PORT, () => console.log (`App listening on port http://localhost:${PORT}`));
})


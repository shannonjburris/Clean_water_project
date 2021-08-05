const sequelize = require('../config/connection');
const seedUser= require ('./user');
const seedComment = require('./comment');
const seedPost = require('./post');
const seedAlgae = require('../models/algae');

const seedAll = async () =>{
    await sequelize.sync({ force: true });

    await seedUser();
    await seedPost();
    await seedComment();

    process.exit(0);
};

seedAll();


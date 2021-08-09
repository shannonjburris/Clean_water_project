const sequelize = require('../config/connection');
const seedUser= require ('./user');
const seedComment = require('./comment');
const seedPost = require('./post');
const seedAlgae = require('./algae');

const seedAll = async () =>{
    try{
        await sequelize.sync({ force: true });
        await seedUser();
        await seedPost();
        await seedComment();
        await seedAlgae();
        
        process.exit(0);
    }catch(error){
        console.error(error);
    }
};

seedAll();


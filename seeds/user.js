const User = require('../models/user');

const UserData = [
    {
     username: 'mariahscary',
     password: 'supersecure'   
    },
    {
     username: 'jamalwayslost',
     password: 'supersecure'   
    },
    {
     username: 'jonascalvin',
     password: 'supersecure'
    },
    {
     username: 'getoutofmylawn',
     password: 'supersecure'   
    }
]

const seedUsers = () => User.bulkCreate(UserData, {individualHooks: true});

module.exports = seedUsers;
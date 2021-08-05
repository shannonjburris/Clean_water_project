const User = require('../models/user');

const UserData = [
    {
     username: 'mariahscary',
     email: 'mariah@scareu.com',
     password: 'supersecure'   
    },
    {
     username: 'jamalwayslost',
     email: 'jamalmals@mail.com',
     password: 'supersecure'   
    },
    {
     username: 'jonascalvin',
     email: 'nomore@hair.com',
     password: 'supersecure'
    },
    {
     username: 'getoutofmylawn',
     email: 'iwillkill@you.com',
     password: 'supersecure'   
    }
]

const seedUsers = () => User.bulkCreate(UserData, {individualHooks: true});

module.exports = seedUsers;
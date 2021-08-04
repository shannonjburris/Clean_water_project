const User = require('../models/comment');

const commentData = [
    {
        body: 'this is the bad algae',
        user_id:'algaeowner1',
        post_id: '1'
    },
    {
        body: 'this algae is fine',
        user_id:'coolalgae3',
        post_id: '2'
    },
    {
        body: 'this algae grows super fast. It is toxic',
        user_id:'nicealgae3',
        post_id: '3'
    },
    {
        body: 'red algae blooms kill fish',
        user_id:'redtidewatcher',
        post_id: '4'
    },
]

const seedComment = () => User.bulkCreate(commentData, {individualHooks: true});

module.exports = seedComment;
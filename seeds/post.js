const Post = require('../models/post')

const postData = [
    {
        title: 'algae is bad',
        body: 'I dont like it',
        location: 'alachua',
        user_id: 2
    },
    {
        title: 'algae is red and blue',
        body: 'what kind of algae is this',
        location: 'orange',
        user_id: 1
    },
    {
        title: 'my dog ate it',
        body: 'Is he going to die',
        location: 'volusia',
        user_id: 3
    },
]
const seedPost = () => Post.bulkCreate(postData, {individualHooks: true});

module.exports = seedPost;
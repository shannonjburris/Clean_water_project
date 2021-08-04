const Post = require('../models/post')

const postData = [
    {
        title: 'algae is bad',
        body: 'I dont like it',
        user_id: 'algaehater1'
    },
    {
        title: 'algae is red and blue',
        body: 'what kind of algae is this',
        user_id: 'algaeconfusion'
    },
    {
        title: 'algae',
        body: 'This is a lot about something about algae',
        user_id: 'algaenuetral'
    },
    {
        title: 'my dog ate it',
        body: 'Is he going to die',
        user_id: 'mydogeatseverything21'
    },
]
const seedPost = () => User.bulkCreate(postData, {individualHooks: true});

module.exports = seedPost;
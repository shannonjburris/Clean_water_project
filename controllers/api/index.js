const router = require('express').Router();
const userRoute = require('./user-routes');
// const postRoute = require('./post');
// const commentRoute = require('./comment-routes');

router.use('/users', userRoute);
// router.use('/post', postRoute);
// router.user('/comment', commentRoute);

module.exports = router;
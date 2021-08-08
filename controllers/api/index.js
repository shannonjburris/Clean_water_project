const router        = require('express').Router();
const userRoute     = require('./user-routes');
const postRoute     = require('./post-routes');
const commentRoute  = require('./comment-routes');
const countyRoutes  = require('./county-routes');

router.use('/users', userRoute);
router.use('/post', postRoute);
router.use('/comment', commentRoute);
router.use('/counties', countyRoutes);

module.exports = router;
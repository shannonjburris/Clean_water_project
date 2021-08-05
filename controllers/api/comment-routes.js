const commentRouter = require('express').Router();
const {Comment} = require('../../models');

// I belive this is done and correct

commentRouter.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            user_id: req.body.user_id,
            body: req.body.body,
            post_id: req.body.post_id
        });
        res.status(200).json(commentData)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



module.exports = commentRouter;

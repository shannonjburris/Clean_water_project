const route = require('express').Router();
const {Comment, Post, User} = require('../../models');

// I belive this is done and correct

route.post('/:id', async (req, res) => {
  
    try {
        const commentData = await Comment.create({
            user_id: req.session.user_id,
            body: req.body.body,
            post_id: req.params.id, 
            include: {
              model: User, 
              attributes: 'username'
            }            
        });
        console.log(commentData);
        res.status(200).json(commentData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



module.exports = route;

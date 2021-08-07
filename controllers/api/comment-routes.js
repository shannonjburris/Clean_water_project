const route = require('express').Router();
const {Comment, Post, User} = require('../../models');

// I belive this is done and correct

route.post('/', async (req, res) => {
    console.log(req.dataValues);
    try {
        const commentData = await Comment.create({
            user_id: req.session.user_id,
            body: req.body.body,
            include:{
              model: Post, 
              attributes: ["id"]
            }
            
        });
        console.log(commentData)
        res.status(200)

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



module.exports = route;

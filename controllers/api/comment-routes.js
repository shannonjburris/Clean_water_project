const route                 = require('express').Router();
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
<<<<<<< HEAD
        console.log(commentData);
        res.status(200).json(commentData);
=======
        res.status(200)
>>>>>>> c04826e8c3606db125698145ddd22ff8890b305b

    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = route;

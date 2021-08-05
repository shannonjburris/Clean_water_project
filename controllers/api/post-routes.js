const { Post } = require('../../models');

const postRouter = require('express').Router();



// I belive this is done and correct

postRouter.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.body.user_id
    });
    res.status(200).json(postData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


postRouter.put('/:id', async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
    },
      { where: { id: req.params.id } }
    );
    res.status(200).json(postData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



postRouter.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = postRouter;

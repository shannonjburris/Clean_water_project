const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

const router = require("express").Router();

// get post by its Primary key
router.get("/:id", async (req, res) => {
  try {
    const getPostById = await Post.findByPk(req.params.id, {
      include: [
        { model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ["body"],
        },
      ],
    });

    const plainPost = getPostById.get({ plain: true });
    
    
    res.render("single-post", {
      plainPost,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// I belive this is done and correct

router.post("/", withAuth, async (req, res) => {
  try {
    
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// implement update post view
router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.create(
      {
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

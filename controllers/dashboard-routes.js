const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [User],
    });

    const posts = allPosts.map((posts) => posts.get({ plain: true }));
    
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/update/:id", withAuth, async (req, res) => {
  try{
    console.log("Post ID: ", req.params.id);
    const postInfo = await Post.findByPk(req.params.id)
    // if(!postInfo){
    //   res.status(400).end();
    // }

    console.log("Post number: ", post);

    const postData = postInfo.get({ plain: true });

    res.render("update", {
      // postData,
      logged_in: req.session.logged_in,
      
    });

  }catch(error){
    res.status(500).json(error);
  }

});


router.get("/new", withAuth, (req, res) => {
  res.render("new-post",{
    logged_in: req.session.logged_in
  });
});

router.get("/county", (req, res) => {
  res.render("county",{
    logged_in: req.session.logged_in
  });
});

router.get("/info", (req, res) => {
  res.render("info",{
    logged_in: req.session.logged_in
  });
});

// implement update post

// implement delete post

module.exports = router;

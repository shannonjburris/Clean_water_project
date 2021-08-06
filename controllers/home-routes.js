const router = require("express").Router();
const { User, Post, Comment, Algae } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const getAllPosts = await Post.findAll({
        include: [User]
        
    });

    const posts = getAllPosts.map((posts) => posts.get({ plain : true }));

    res.render('all-posts', {
    posts,
    logged_in: req.session.logged_in
    });
    
  } catch (error) {
    res.status(500).json(error);
  }
  
});

// get to login or redirect back home

router.get("/login", (req, res) => {
  // if user logs in they are redirected to the dashboard
  if (req.session.logged_in) {
    res.redirect("/dashboard");
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;

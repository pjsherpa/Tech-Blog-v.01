const router = require("express").Router();

//import from models folder
const { Post, User, Comment } = require("../models");

//Import cutom middleware
const withAuth = require("../utils/auth");

//Get all posts in homepage

router.get("/", async (req, res) => {
  try {
    // Get all data
    const postData = await Post.findAll({
      include: [User],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template

    res.render("all-posts-administration", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//check which id the route will be located.
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      model: Comment,
    });

    const post = postData.get({ plain: true });

    res.render("single-post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

module.exports = router;

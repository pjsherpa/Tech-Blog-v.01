const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("all-posts", {
      posts,
      layout: "dashboard",
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// /new post needs to requested to be reponded on webpage.
router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

module.exports = router;

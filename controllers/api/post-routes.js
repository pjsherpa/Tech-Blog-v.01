// ref:miniPost 28 MVC
// WIP--->Worked on this already to check final --PJ
const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//update new post

router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log("here is the req.body", req.body);

    const [postData] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log("POSTDATA=", postData);
    if (postData > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No Post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

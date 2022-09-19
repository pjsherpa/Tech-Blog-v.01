// What we learnt in express
const router = require("express").Router();
const userRouter = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes.js");

//Import our modular routers for users to the post.
router.use("/user", userRouter);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;

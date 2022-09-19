// What we learnt in express

const router = require("express").Router();
const userRouter = require("./user-routes");
const blogRoutes = require("./post-routes");

//Import our modular routers for users to the post.
router.use("./user", userRouter);
router.use("./post", blogRoutes);

module.exports = router;

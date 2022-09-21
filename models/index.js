//building connection between the tables created

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User has many posts
User.hasMany(Post, {
  foreignKey: "userId",
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: "userId",
});

// Post belongs to user through user_id
Post.belongsTo(User, {
  foreignKey: "userId",
});

//Post has many comments
Post.hasMany(Comment, {
  foreignKey: "postId",
});

//Comments belong to user through user_id
Comment.belongsTo(User, {
  foreignKey: "userId",
});

//Comments belong to posts through post_id
Comment.belongsTo(Post, {
  foreignKey: "postId",
});

module.exports = {
  User,
  Post,
  Comment,
};

//building connection between the tables created

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Post belongs to user through user_id
Post.belongsTo(User, {
  foreignKey: "user_id",
});

//Post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

//Comments belong to user through user_id
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

//Comments belong to posts through post_id
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = {
  User,
  Post,
  Comment,
};

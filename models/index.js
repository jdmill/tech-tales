const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "user_id",
  constraints: false,
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  constraints: false,
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  constraints: false,
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  constraints: false,
});

module.exports = { User, Post, Comment };

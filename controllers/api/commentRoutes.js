const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//create comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

router.get("/", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const commentData = await Comment.findAll();

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

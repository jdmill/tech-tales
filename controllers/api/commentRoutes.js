const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//create comment
router.post("/:id", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });

    console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

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

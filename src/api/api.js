const express = require('express');
const { Post } = require('../models'); // Import the Post model

const router = express.Router();

// GET /api/posts
router.get('/posts', async (req, res, next) => {
  try {
    const posts = await Post.findAll(); // Use `findAll` to retrieve all posts

    res.json({ success: true, posts });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

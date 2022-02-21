const express = require('express')
const router = express.Router()

const PostController = require('../controllers/PostController.js')

// Methods
router.post('/create', PostController.createPost) // Create Post
router.post('/update', PostController.updatePost) // Update Post
router.post('/delete/:id', PostController.deletePost) // Delete Post

// Pages
router.get('/', PostController.readPosts) // Page - Posts
router.get('/create', PostController.createPostPage) // Page - Create Post
router.get('/update/:id', PostController.updatePostPage) // Page - Update Post

router.get('/aboutproject', PostController.aboutProject) // Page - Aboutproject



module.exports = router;
const Post = require('../models/Post')

class PostController {
    
     // Page - readPosts 
     static async readPosts(req, res) {
        const posts = await Post.findAll({ raw : true })
        res.render('dashboard', { posts: posts })
    }
    

    // Page - CreatePost 
    static async createPostPage(req, res) {
        res.render('createpost')
    }
    

    // Page - readUpdatedPost 
    static async updatePostPage(req, res) {
        const id = req.params.id
        const post = await Post.findOne({ raw: true, where: { id : id }})    
    
        res.render('updatepost', { post })
    }


    // Page - AboutProject 
    static async aboutProject(req, res) {
        res.render('aboutproject')
    }

    
    static async createPost(req, res) {
        const title = req.body.title
        const content = req.body.content
        const author = req.body.author
        const date = req.body.date

        await Post.create({ title, content, author, date })

        res.redirect('/')

    }


    static async updatePost(req, res) {
        const id = req.body.id
        const title = req.body.title
        const content = req.body.content
        const author = req.body.author
        const date = req.body.date

        const post = { id, title, content, author, date }

        Post.update(post, { where: { id: id }})
        res.redirect('/')
    }

    
    static async deletePost(req, res) {
        const id = req.params.id

        await Post.destroy({ where: { id : id }})
        res.redirect('/')
    }     


}


module.exports = PostController;
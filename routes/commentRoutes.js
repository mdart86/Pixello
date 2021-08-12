// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

const {loginRequired} = require('../controllers/authController')
const {getCommentId, removeComment} = require('../controllers/commentController')


const Post = require('../models/post')
const Comment = require('../models/comment')

router.use(loginRequired)

router.post('/create_comment/:id', async (req, res) => {
    //get the post by id
    let postId = await Post.findById(req.params.id);
    
    try {
        const newComment = new Comment (req.body)
        newComment.postId = postId._id

        console.log(newComment, "New Comment Console Details")

        await newComment.save((err, comment) => {
            if(err) {
                res.status(500)
                return res.json({error: err.message})
            }
            console.log("Comment saved")
            res.status(200)
            res.send(comment)
            })
        }
        catch (err) {
            console.log("Comment NOT saved")
    }
})

router.delete('/:id', removeComment);

module.exports = router
const express = require('express');
const commentRouter = express.Router();

const { loginRequired } = require('../controllers/authController');

const User = require('../models/user')
const Post = require('../models/post')


router.use(loginRequired)

router.post('/create_comment', async (req, res, id) => {
    try {
        let user = await User.findById(id);
        let post = await Post.findById(id);
        
        userId = user(res.send({_id: user._id}))
        postId = post(res.send({_id: post._id}))
        
        const newComment = new Comment (req.body)
        newComment.userId = userId
        newComment.postId = postId

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

// router.get('/:postId', retrieveComments);

// router.delete('/:commentId', deleteComment);

module.exports = router
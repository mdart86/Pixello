// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring functions that sit within controllers - login function from auth controller is required to ensure a user is logged in
const {loginRequired} = require('../controllers/authController')
const {getCommentId, removeComment} = require('../controllers/commentController')

// requiring models directly into routes due to async/routes functions
const Post = require('../models/post')
const Comment = require('../models/comment')

// function to ensure the router uses the login required function
router.use(loginRequired)

router.post('/new_comment/:id', async (req, res) => {
    //get the post by id
    let postId = await Post.findById(req.params.id);
    
    try {
        // creates newComment passing in the body as a request
        const newComment = new Comment (req.body)
        newComment.postId = postId._id // post-id is assigned to the newComment variable after it is pulled from the post database

        // await function to save the new comment based on the required fields in the database
        await newComment.save((err, comment) => {
            if(err) {
                res.status(500)
                return res.json({error: err.message}) // if no error, it will move to the next otherwise error message sent
            }
            console.log("Comment saved")
            res.status(200)
            res.send(comment) // comment is sent back to controller/utils/database
            })
        }
        catch (err) {
            console.log("Comment NOT saved") // error is caught
    }
})

// router function to get all comments - which is filtered on the front end
router.get('/get_comments', getCommentId);

// router function to delete comment
router.delete('/:id', removeComment);

// router exported to app.js file for app to use
module.exports = router
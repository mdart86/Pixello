// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

const {loginRequired} = require('../controllers/authController')
const {getCommentId} = require('../controllers/commentController')


const Post = require('../models/post')
const Comment = require('../models/comment')

router.use(loginRequired)

router.post('/create_comment/:id', async (req, res) => {
    //get the post by id
    let postId = await Post.findById(req.params.id);
    
    try {
        const newComment = new Comment (req.body)
        newComment.postId = postId

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

router.get('/:id', getCommentId);

// router.delete('/:id', () => {
//     //get the post by id
//     Comment.findByIdAndRemove(req.params.id).exec((err)=>{
//         if (err){
//             res.status(404)
//             return res.json({error: err.message})
//         }
//         res.sendStatus(204)
//     })
    
//     // catch (err) {
//     // console.log(err);
//     // } 
// })

// findByIdAndRemove


module.exports = router
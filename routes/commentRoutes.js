// const express = require('express');
// const commentRouter = express.Router();

// const { loginRequired } = require('../controllers/authController');

// const User = require('../models/user')
// const Post = require('../models/post')


// router.use(loginRequired)

// router.post('/create_post, a

// router.put('/update_likes/:id', async (req, res) => {
//     //get the post by id
//     let post = await Post.findById(req.params.id);
//     //increase post's likes +1
//     post.likes++
//     //update it in the database
//     Post.findByIdAndUpdate(req.params.id, post, {new: true}).exec((err, card)=>{
//       if (err){
//           res.status(404)
//           return res.json({error: err.message})
//       }
//       res.status(200)
//       res.send(card)
//     })
//   });

// router.get('/:postId', retrieveComments);

// router.delete('/:commentId', deleteComment);

// module.exports = router
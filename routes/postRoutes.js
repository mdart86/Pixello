// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring Post model into file
const Post = require('../models/post')

// Requiring functions that sit within controllers
const {getAllDatabasePosts, getPostsforUser, getIndividualUserPost} = require('../controllers/postController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

router.use(loginRequired)

router.post('/new_post', upload.single("image"), async (req, res) => {
    try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new post
    const newPost = new Post(req.body)
    newPost.avatarUrl = result.secure_url
    newPost.imageId = result.public_id
    console.log(newPost)
    // Save post
    await newPost.save((err, post)=>{
        if(err){
            res.status(500)
            return res.json({error: err.message})
        }
        console.log("Image upload successful")
        return res.json({username: post.username, caption: post.caption, category: post.category, imageId: post.imageId, _id: post._id}) 
        });
    } 
    // error received
    catch (err) {
    console.log(err, "Image upload unsuccessful");
    }
}); 

router.get('/', getAllDatabasePosts)
router.get('/user_posts', getPostsforUser)
router.get('/:id', getIndividualUserPost)

router.put('/update_likes/:id', async (req, res) => {
  //get the post by id
  let post = await Post.findById(req.params.id);
  //increase post's likes +1
  post.likes++
  //update it in the database
  Post.findByIdAndUpdate(req.params.id, post, {new: true}).exec((err, card)=>{
    if (err){
        res.status(404)
        return res.json({error: err.message})
    }
    res.status(200)
    res.send(card)
  })
});

router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        // Retreive Post
        let post = await Post.findById(req.params.id);
        // Delete image from Cloudinary
        await cloudinary.uploader.destroy(post.imageId);
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
      const data = {
        username: req.body.username || post.username,
        caption: req.body.caption || post.caption,
        category: req.body.category || post.category,
        likes: req.body.likes || post.likes,
        avatarUrl: result.secure_url || post.avatarUrl,
        imageId: result.public_id || post.imageId,
      };
      post = await Post.findByIdAndUpdate(req.params.id, data, {
    new: true
    });
      res.json(post);
    } 
    catch (err) {
        console.log(err)
    }
});

router.delete("/:id", async (req, res) => {
    try {
      // Find user by id
      console.log(req.params.id)
      let post = await Post.findById(req.params.id);
      // Delete image from cloudinary
      console.log(post)
      await cloudinary.uploader.destroy(post.imageId);
      // Delete user from DB
      Post.findByIdAndRemove(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204)
    })} 
    catch (err) {
    console.log(err);
    } 
  });

module.exports = router
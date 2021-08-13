// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring models into file
const User = require('../models/user')
const Post = require('../models/post')

// Requiring functions that sit within controllers
const {getAllDatabasePosts, getPostsforUser, getIndividualUserPost} = require('../controllers/postController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

// function to ensure the router uses the login required function
router.use(loginRequired)

// new post router function created with id from user model 
router.post('/new_post/:id', upload.single("image"), async (req, res) => {
    try {
    // user is found by id and stored into variable
    let userId = await User.findById(req.params.id);  
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new post which is stored in a variable - passes body dictated by the model with other variables passed to once received
    const newPost = new Post(req.body)
    newPost.userId = userId._id // only user id is sent to post
    newPost.photoUrl = result.secure_url // URL retrieved from Cloudinary
    newPost.imageId = result.public_id // id retrieved from Cloudinary
    console.log(newPost)
    // Saved post
    await newPost.save((err, post)=>{
        if(err){
            res.status(500)
            return res.json({error: err.message})
        }
        console.log("Image upload successful")
        return res.json({username: post.username, caption: post.caption, category: post.category, imageId: post.imageId, _id: post._id}) // post is returned as a confirmation
        });
    } 
    // error received
    catch (err) {
    console.log(err, "Image upload unsuccessful");
    }
}); 

// router function to get all database posts - for home page
router.get('/', getAllDatabasePosts)

// router function to get all user posts - for user profile
router.get('/user_posts', getPostsforUser)

// router function to get post by id - to view individual post
router.get('/:id', getIndividualUserPost)

router.put('/update_likes/:id', async (req, res) => {
  //get the post by id
  let post = await Post.findById(req.params.id);
  //increase post's likes +1
  post.likes++
  //update it in the database by finding the post by id
  Post.findByIdAndUpdate(req.params.id, post, {new: true}).exec((err, savedPostLike)=>{
    if (err){
        return res.json({error: err.message})
    }
    res.status(200)
    res.send(savedPostLike) // return saved like
  })
});

// router function to update the post
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        // Retreive Post by Id
        let post = await Post.findById(req.params.id);
        // Delete image from Cloudinary that currently exists
        await cloudinary.uploader.destroy(post.imageId);
        // Upload new image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Updated post which will pass data by what the user sends. Data is dictated by the model as below
      const data = {
        username: req.body.username || post.username,
        userId: req.body.userId || post.userId,
        caption: req.body.caption || post.caption,
        category: req.body.category || post.category,
        likes: req.body.likes || post.likes, 
        photoUrl: result.secure_url || post.photoUrl, // new photoUrl that comes from Cloudinary
        imageId: result.public_id || post.imageId, // new Image ID that comes from Cloudinary
      };
      post = await Post.findByIdAndUpdate(req.params.id, data, {
    new: true
    });
      res.json(post); // response sends post
    } 
    catch (err) {
        console.log(err) // catches error
    }
});

// router function to delete post from database
router.delete("/:id", async (req, res) => {
    try {
      // Find user by id
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
        res.sendStatus(204) // send successfull status
    })} 
    catch (err) {
    console.log(err); // catches error logged to console
    } 
  });

// router exported to app.js file for app to use
module.exports = router
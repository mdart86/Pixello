// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring User model into file
const User = require('../models/user')

// Requiring functions that sit within controllers
const {getUser, getUserLabel} = require('../controllers/userController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils folder - this middleware assists with image uploads to Cloudinary
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

// function to ensure the router uses the login required function
router.use(loginRequired)

// router function to get user by ID to display user profile
router.get('/:id', getUser)

// router function to get user label which will display certain criteria set out in controller function. This is used to display this information as a label for posts and comments throughout the application
router.get('/user_label/:id', getUserLabel)

// router function to update user profile including image in cloudinary
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      // find user by id and stored in variable
      let user = await User.findById(req.params.id);
      // Delete image from Cloudinary that currently exists
      await cloudinary.uploader.destroy(user.imageId);
      // Upload new image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // Updated user which will pass data by what the user sends. Data is dictated by the model as below
      const data = {
        username: req.body.username || user.username,
        email: req.body.email || user.email,
        bio: req.body.bio || user.bio,
        avatarUrl: result.secure_url || user.avatarUrl, // new photoUrl that comes from Cloudinary
        imageId: result.public_id || user.imageId, // new Image ID that comes from Cloudinary
      };
      // User find by Id and update based on data above
      user = await User.findByIdAndUpdate(req.params.id, data, {
    new: true
    });
      res.json(user); // response sends user
    } 
    catch (err) {
    console.log(err) // catches error
    }
});

// router function to delete user from database
router.delete("/:id", async (req, res) => {
  try {
    // Find user by id and stored inside a variable
    let user = await User.findById(req.params.id);
    // Delete image from cloudinary using imageId which matches the ID in the database
    await cloudinary.uploader.destroy(user.imageId);
    // Finds Post by ID and removes from Database
    User.findByIdAndRemove(req.params.id).exec((err)=>{
      if (err){
          res.status(404)
          return res.json({error: err.message})
      }
      res.sendStatus(204)// send successfull status
  })} 
  catch (err) {
  console.log(err); // catches error logged to console
  } 
});

// router exported to app.js file for app to use
module.exports = router
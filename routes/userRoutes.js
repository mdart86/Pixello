// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring User model into file
const User = require('../models/user')

// Requiring functions that sit within controllers
const {getUser, getUserLabel} = require('../controllers/userController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

router.use(loginRequired)

router.get('/:id', getUser)
router.get('/user_label/:id', getUserLabel)

// router function to update user profile including image in cloudinary
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      // Upload image to cloudinary
      await cloudinary.uploader.destroy(user.imageId);
      const result = await cloudinary.uploader.upload(req.file.path);
      const data = {
        username: req.body.username || user.username,
        email: req.body.email || user.email,
        bio: req.body.bio || user.bio,
        avatarUrl: result.secure_url || user.avatarUrl,
        imageId: result.public_id || user.imageId,
      };
      user = await User.findByIdAndUpdate(req.params.id, data, {
    new: true
    });
      res.json(user);
    } 
    catch (err) {
    console.log(err)  
    }
});


router.delete("/:id", async (req, res) => {
  try {
    // Find user by id
    console.log(req.params.id)
    let user = await User.findById(req.params.id);
    // Delete image from cloudinary
    console.log(user)
    await cloudinary.uploader.destroy(user.imageId);
    // Delete user from DB
    User.findByIdAndRemove(req.params.id).exec((err)=>{
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
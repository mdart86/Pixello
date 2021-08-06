// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring User model into file
const User = require('../models/user')

// Requiring functions that sit within controllers
const {getUser} = require('../controllers/userController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

router.use(loginRequired)

router.get('/:id', getUser)

// router function to update user profile including image in cloudinary
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const data = {
        username: req.body.username || user.username,
        email: req.body.email || user.email,
        bio: req.body.bio || user.bio,
        avatar: result.secure_url || user.avatar,
        cloudinary_id: result.public_id || user.cloudinary_id,
      };
      user = await User.findByIdAndUpdate(req.params.id, data, {
    new: true
    });
      res.json(user);
    } catch (err) {
}});


router.delete("/:id", async (req, res) => {
    try {
      // Find user by id
      let user = User.findById(req.params.id);
      console.log(user)
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(req.user.cloudinary_id);
      // Delete user from db
      const userDelete = {
        username: req.body.username || user.username,
        email: req.body.email || user.email,
        bio: req.body.bio || user.bio,
        avatar: secure_url || user.avatar,
        cloudinary_id: public_id || user.cloudinary_id,
      };
      console.log(userDelete)
      await User.remove(userDelete);
      res.json(user);
      console.log(userDelete)
    } catch (err) {
    }});

module.exports = router
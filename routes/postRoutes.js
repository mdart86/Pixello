// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring Post model into file
const Post = require('../models/post')

// Requiring functions that sit within controllers
const {getAllDatabasePosts, getPostsforUser, getIndividualUserPost, removePost} = require('../controllers/postController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

router.use(loginRequired)

router.post('/new_post', upload.single('image'), async (req, res) => {
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
        return res.json({username: post.username, caption: post.caption, category: post.category, _id: post._id}) 
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

router.delete('/:id', removePost)

router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      let user = await Post.findById(req.params.id);
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
      user = await Post.findByIdAndUpdate(req.params.id, data, {
    new: true
    });
      res.json(post);
    } 
    catch (err) {
        console.log(err)
    }
});

module.exports = router
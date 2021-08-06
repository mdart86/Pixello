// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// requiring Post model into file
const Post = require('../models/post')

// Requiring functions that sit within controllers
const {getPosts, getPost, removePost, changePost} = require('../controllers/postController')
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
    newPost.avatar = result.secure_url
    newPost.imageUrl = result.public_id
    console.log(newPost)
    // Save post
    await newPost.save((err, post)=>{
        if(err){
            res.status(500)
            return res.json({error: err.message})
        }
        console.log("Image upload successful")
        // res.send(post)
        return res.json({username: post.username, caption: post.caption, category: post.category, _id: post._id}) 
        });
    } 
    // error received
    catch (err) {
    console.log(err, "Image upload unsuccessful");
    }
}); 



router.get('/', getPosts)
router.get('/:id', getPost)

router.delete('/:id', removePost)

router.put('/:id', changePost)

module.exports = router
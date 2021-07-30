const express = require('express')
const router = express.Router()

const {getPosts, newPost, getPost, removePost, changePost} = require('../controllers/postController')
const {loginRequired} = require('../controllers/authController')

router.use(loginRequired)

router.get('/', getPosts)
router.get('/:id', getPost)


router.post('/', newPost)

router.delete('/:id', removePost)

router.put('/:id', changePost)


module.exports = router
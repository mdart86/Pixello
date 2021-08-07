const Post = require ('../models/post')

// Helper function to get all posts of all users
const getAllUserPosts = function () {
    return Post.find()
}

// Helper function to get all posts from Model associated to user
const getAllPostsOfUser = function (req){
    return Post.find({username: req.user.username})
}

// Helper function to get post by id from Model associated to user
const getUserPostById = function (id){
    return Post.findById(id)
}

// const getPostByCategory = function (req){
//     return Post.find({post: req.post.category})
// }

module.exports = {getAllUserPosts, getAllPostsOfUser, getUserPostById}
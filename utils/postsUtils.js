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

const getPostByIdForLikes = function (req) {
    return Post.findOneAndUpdate(req({likes: req.post.likes, _id: post._id}))
    console.log(req.post.likes)
}

module.exports = {getAllUserPosts, getAllPostsOfUser, getUserPostById, getPostByIdForLikes}
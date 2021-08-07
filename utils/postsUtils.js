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

// Helper function to delete a post to Model associated to user
const deletePost = function(id){
    return Post.findByIdAndRemove(id)
}

module.exports = {getAllUserPosts, getAllPostsOfUser, getUserPostById, deletePost}
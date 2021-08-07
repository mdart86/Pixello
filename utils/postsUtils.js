const Post = require ('../models/post')

// Helper function to get all posts of all users
const getAllUserPosts = function () {
    return Post.find()
}

// Helper function to get all posts from Model associated to user
const getAllPosts = function (req){
    return Post.find({username: req.user.username})
}

// Helper function to get post by id from Model associated to user
const getPostById = function (id){
    return Post.findById(id)
}

// Helper function to delete a post to Model associated to user
const deletePost = function(id){
    return Post.findByIdAndRemove(id)
}

// Helper function to update a post to Model associated to user
const updatePost = function(req){
    req.body.modified_at = Date.now()
    //new: true will return the updated card
    return Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
}

module.exports = {getAllUserPosts, getAllPosts, getPostById, deletePost, updatePost}
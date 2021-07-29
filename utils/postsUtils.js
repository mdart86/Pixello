const Card = require ('../models/post')

// Helper function to get all posts from Model associated to user
const getAllPosts = function (req){
    return Card.find({username: req.user.username})
}

// Helper function to add a post to Model associated to user
const addPost = function(req){
    let date = Date.now()
    req.body.username = req.user.username
    req.body.created_at = date
    req.body.modified_at = date
    return Card(req.body)
}

// Helper function to get post by id from Model associated to user
const getPostById = function (id){
    return Card.findById(id)
}

// Helper function to delete a post to Model associated to user
const deletePost = function(id){
    return Card.findByIdAndRemove(id)
}

// Helper function to update a post to Model associated to user
const updatePost = function(req){
    req.body.modified_at = Date.now()
    //new: true will return the updated card
    return Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
}

module.exports = {getAllPosts, addPost, getPostById, deletePost, updatePost}
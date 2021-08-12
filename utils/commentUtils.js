// requires comment scheema/model into file to allow helper functions to access data
const Comment = require ('../models/comment')

// Helper function to find comment by id
const getCommentById = function () {
    // Comment.find({postId: {$all : [post._id]}})
    // Comment.find({})
    //         .where(postId).equals(postId)
    // Comment.query.select(postId)
    const Comment = query.Comment.$where(function () {
        return postId === postId
    })
}

// Helper function to find comment by id and remove
const deleteComment = function(id){
    return Comment.findByIdAndRemove(id)
}

// Helper functions are exported from this file and passed to the /controllers/commentController.js
module.exports = {getCommentById, deleteComment}
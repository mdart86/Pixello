// requires comment scheema/model into file to allow helper functions to access data
const Comment = require ('../models/comment')

// Helper function to find comment by id
const getCommentById = function (){
    // return Comment.find({postId: req.comment.postId})
    return Comment.find()
}

console.log(getCommentById, "test console")

// Helper function to find comment by id and remove
const deleteComment = function(id){
    return Comment.findByIdAndRemove(id)
}

// Helper functions are exported from this file and passed to the /controllers/commentController.js
module.exports = {getCommentById, deleteComment}
const Comment = require ('../models/comment')

// Helper function to get post by id from Model associated to user
const getCommentById = function (id){
    return Comment.findById(id)
}

// To delete a comment
const deleteComment = function(id){
    return Comment.findByIdAndRemove(id)
}


module.exports = {getCommentById, deleteComment}
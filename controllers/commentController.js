// requiring helper functions from Utils that query the database into the controller to be passed onto the routes
const {getCommentById, deleteComment} = require('../utils/commentUtils')

// controller function to return all comments, comments by post id to be controlled on the front end. Passed to/from the utils/routes files for comments.
const getCommentId = function (req, res){
    getCommentById(req.params.id).exec((err, comment)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(comment) // successful message returned
    })
}

// controller function function help remove the comment. Passed to/from the utils/routes files for comments.
const removeComment = function(req, res){
    deleteComment(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204) // successfull messge returned
    })
}

// functions are exported to be used in comments routes file
module.exports = {getCommentId, removeComment}
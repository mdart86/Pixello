const {getCommentById, deleteComment} = require('../utils/commentUtils')

// controller function to return post by id
const getCommentId = function (req, res){
    getCommentById(req.params.id).exec((err, comment)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(comment)
    })
}

const removeComment = function(req, res){
    deleteComment(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204) // successfull messge returned
    })
}

module.exports = {getCommentId, removeComment}
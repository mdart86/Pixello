const {getCommentById } = require('../utils/commentUtils')

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

module.exports = {getCommentId}
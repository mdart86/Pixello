const {getAllPosts, addPost, getPostById, deletePost, updatePost} = require('../utils/postsUtils')

const getPosts = function (req, res){
    getAllPosts(req).exec((err, cards)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(cards)
    })
}

const getPost = function (req, res){
    getPostById(req.params.id).exec((err, card)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(card)
    })
}

const newPost = function (req, res){
    addPost(req).save((err, card)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        }
        res.send(card)
    })
}

const removePost = function(req, res){
    deletePost(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204)
    })
}

const changePost = function(req,res){
    updatePost(req).exec((err, card)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.status(200)
        res.send(card)
    })
}

module.exports = {getPosts, newPost, getPost, removePost, changePost}
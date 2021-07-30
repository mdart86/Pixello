const {getAllPosts, addPost, getPostById, deletePost, updatePost} = require('../utils/postsUtils')

const getPosts = function (req, res){
    getAllPosts(req).exec((err, posts)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(posts)
    })
}

const getPost = function (req, res){
    getPostById(req.params.id).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(post)
    })
}

const newPost = function (req, res){
    addPost(req).save((err, post)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        }
        res.send(post)
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
    updatePost(req).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.status(200)
        res.send(post)
    })
}

module.exports = {getPosts, newPost, getPost, removePost, changePost}
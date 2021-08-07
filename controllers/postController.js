const {getAllUserPosts, getAllPosts, getPostById, deletePost, updatePost} = require('../utils/postsUtils')

// controller function to return all posts for all users
const getAllDatabasePosts = function (req, res){
    getAllUserPosts(req).exec((err, posts)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(posts)
    })
}

// controller function to return all posts of user
const getPosts = function (req, res){
    getAllPosts(req).exec((err, posts)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(posts)
    })
}

// controller function to return post by id
const getPost = function (req, res){
    getPostById(req.params.id).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(post)
    })
}

// controller function to delete post of user
const removePost = function(req, res){
    deletePost(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204)
    })
}

// controller function to update post of user
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

module.exports = {getAllDatabasePosts, getPosts, getPost, removePost, changePost}
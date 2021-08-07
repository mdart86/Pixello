const {getAllUserPosts, getAllPostsOfUser, getUserPostById, getPostByIdForLikes} = require('../utils/postsUtils')

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
const getPostsforUser = function (req, res){
    getAllPostsOfUser(req).exec((err, posts)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(posts)
    })
}

// controller function to return post by id
const getIndividualUserPost = function (req, res){
    getUserPostById(req.params.id).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(post)
    })
}


const updateLikesOnPost = function (req, res){
    getPostByIdForLikes(req).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        return res.json({likes: post.likes, _id: post._id})
    })
}

module.exports = {getAllDatabasePosts, getPostsforUser, getIndividualUserPost, updateLikesOnPost}
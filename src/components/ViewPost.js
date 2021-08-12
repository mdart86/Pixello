import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useGlobalState } from '../utils/context'
//image imports:
import placeholderImage from '../images/image-loading.png'
import like from '../images/like-green.svg'
//react component imports: 
import { Comment } from './Comment'
import { AddComment } from './AddComment'
import { PermissionsBar } from './PermissionsBar'
//styled component imports: 
import { StyledLink } from './styled/StyledLink.styled'
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { Username } from './styled/Username.styled'
import { PostContainer, CommentsContainer } from './styled/Container.styled'
import { Photo } from './styled/Photo.styled'
import { IconViewPost } from './styled/Icon.styled'
import { Avatar } from './styled/Avatar.styled'
import { Caption } from './styled/Caption.styled'

export const ViewPost = () => {
    
    const { id } = useParams()

    const { store } = useGlobalState()
    const { loggedInJWT, loggedInUserId } = store

    //stores post data retreived by the axios request
    const [postData, setPostData ] = useState("")
    const {username, caption, photoUrl, userId} = postData

    //stores user data retreived by the axios request
    const [userData, setUserData ] = useState("")
    //deconstruct user data for use in render
    const {avatarUrl} = userData

    //stores comment data retreived by the axios request
    const [commentData, setCommentData ] = useState("")

    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        async function fetchPostData() {
            await axios.get(`https://pixello.herokuapp.com/posts/${id}`, authorisation)
                .then(res => {
                    if (res.data) {
                        setPostData(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
        async function fetchUserData() {
            await axios.get(`https://pixello.herokuapp.com/users/${userId}`, authorisation)
                .then(res => {
                    if (res.data) {
                        setUserData(res.data)
                    } 
                })
                .catch(err => console.log(err))
        }
        async function fetchCommentData() {
            await axios.get(`https://pixello.herokuapp.com/comments/get_comments`, authorisation)
                .then(res => {
                    if (res.data) {
                        //sort reverses order of data so that newer comments appear higher up
                        const retrievedData = res.data.sort((a,b) => b - a)
                        
                        //isolate comments that belong to this post
                        let requestedComments = []
                        for (let comment of retrievedData) {
                            if (comment.postId === id) {
                                requestedComments.push(comment)
                            }
                        }
                        setCommentData(requestedComments)
                    } 
                })
                .catch(err => console.log(err))
        }
        fetchPostData()
        fetchUserData()
        fetchCommentData()
    }, [id, loggedInJWT, userId])

    return (
        <>
            {window.innerWidth < 600 ? <PinkFeature><WhiteFeature/></PinkFeature> : null}
            <PostContainer>
                { userId && (userId === loggedInUserId) && window.innerWidth < 600 ? 
                <PermissionsBar/> 
                : userId && (userId === loggedInUserId) && window.innerWidth >= 600 ?
                <PermissionsBar desktop="true"/>
                : null }
                <Link to={`/profile/${id}`}><Avatar viewPost="true" src={avatarUrl || placeholderImage} alt="A man's profile picture."/></Link>
                <StyledLink to={`/profile/${id}`}><Username fontSize="1.2rem" viewPost="true">{username}</Username></StyledLink>
                <Caption viewPost="true">{caption}</Caption>
                <Photo unClickable="true" viewPost="true" src={photoUrl || placeholderImage} alt="A candid photo of people on the beach."/>
                <IconViewPost src={like} alt="like button"/>
                <CommentsContainer>
                    <AddComment/>
                    {commentData ? 
                        commentData.map(obj => {
                            return <Comment commentData={obj} userData={userData} key={obj.id}/>
                            }) : <p>This post doesn't have any comments yet.</p>}
                </CommentsContainer>
                {window.innerWidth < 600 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
            </PostContainer>
        </>
    )
}
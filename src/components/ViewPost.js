import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useGlobalState } from '../utils/context'
//image imports:
import like from '../images/like-green.svg'
import profilePicture from '../images/profile-picture.jpeg'
import film from '../images/film.svg'
import water from '../images/water.svg'
import candid from '../images/candid.svg'
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
import { PostContainer } from './styled/PostContainer.styled'
import { Photo } from './styled/Photo.styled'
import { IconViewPost } from './styled/Icon.styled'
import { Avatar } from './styled/Avatar.styled'
import { CommentsContainer } from './styled/CommentsContainer.styled'
import { CategoryContainer } from './styled/CategoryContainer.styled'
import { Caption } from './styled/Caption.styled'

// add logic to show the permissions bar 
//only when the user is an admin, or is the 
//owner of the post/comment/profile

export const ViewPost = () => {
    
    const { id } = useParams()

    const { store } = useGlobalState()
    const { loggedInJWT } = store

    //placeholder to remove errors
    const category = "film"

    const [postData, setPostData ] = useState("")
    
    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        async function fetchData() {
            await axios.get(`https://pixello.herokuapp.com/posts/${id}`, authorisation)
                .then(res => {
                    setPostData(res.data)
                })
                .catch(err => console.log(err))
        }
        fetchData()
    }, [id, loggedInJWT])

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : null}
            <PostContainer>
                {window.innerWidth < 450 ? <PermissionsBar/> : <PermissionsBar desktop="true"/> }
                <Link to={`/profile/${id}`}><Avatar viewPost="true" src={profilePicture} alt="A man's profile picture."/></Link>
                <StyledLink to={`/profile/${id}`}><Username fontSize="1.2rem" viewPost="true">{postData.username}</Username></StyledLink>
                <Caption viewPost="true">{postData.caption}</Caption>
                <Photo unClickable="true" viewPost="true" src={postData.avatarUrl} alt="A candid photo of people on the beach."/>
                <IconViewPost src={like} alt="like button"/>
                <CategoryContainer>
                    <Link to={`/posts/${category}`}><IconViewPost src={film} alt="film category"/></Link>
                    <Link to={`/posts/${category}`}><IconViewPost water="true" src={water} alt="water category"/></Link>
                    <Link to={`/posts/${category}`}><IconViewPost src={candid} alt="candid category"/></Link>
                </CategoryContainer>
                <CommentsContainer>
                    <AddComment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </CommentsContainer>
                {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
            </PostContainer>
        </>
    )
}
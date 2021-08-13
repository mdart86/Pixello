import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//image imports: 
import like from '../images/like-pink.svg'
import placeholderImage from '../images/image-loading.png'
//react component imports: 
import { PermissionsBar } from './PermissionsBar'
//styled component imports:
import { StyledLink } from './styled/StyledLink.styled'
import { Username } from './styled/Username.styled'
import { IconComment } from './styled/Icon.styled'
import { Avatar } from './styled/Avatar.styled'
import { Caption } from './styled/Caption.styled'
import { BoxComment } from './styled/Box.styled'

// NOTE TO SELF: add logic to show the permissions bar 
//only when the user is an admin, or is the 
//owner of the post/comment/profile

export const Comment = ({ commentData, history }) => {

    const { store } = useGlobalState()
    const { loggedInUserId, loggedInJWT } = store
    
    //deconstruct comment data for use in render
    const {username, comment} = commentData

    //stores user data retreived by the axios request
    const [ userData, setUserData ] = useState("")
    //deconstruct user data for use in render
    const {avatarUrl} = userData

    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        async function fetchUserData() {
            await axios.get(`https://pixello.herokuapp.com/users/${loggedInUserId}`, authorisation)
                .then(res => {
                    if (res.data) {
                        setUserData(res.data)
                    } 
                })
                .catch(err => console.log(err))
        }
        fetchUserData()
    }, [loggedInJWT, loggedInUserId])

    return (
            <BoxComment>
                <Link to={`/profile/${loggedInUserId}`}><Avatar comment="true" src={avatarUrl || placeholderImage} alt="A man's profile picture."/></Link>
                <IconComment src={like} alt="like button"/>
                <StyledLink to={`/profile/${loggedInUserId}`}><Username comment="true" fontSize="0.8rem">{username}</Username></StyledLink>
                <Caption comment="true">{comment}</Caption>
                { userData.id === loggedInUserId ? 
                <PermissionsBar comment="true" commentId={commentData._id} history={history}/>
                : null }
            </BoxComment>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/context'
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

export const Comment = ({ commentData, userData }) => {

    const { store } = useGlobalState()
    const { loggedInUserId } = store
    
    //deconstruct comment data for use in render
    const {username, comment} = commentData

    console.log("userdata ", userData)
    const {id} = userData

    return (
            <BoxComment>
                <Link to={`/profile/${id}`}><Avatar comment="true" src={userData.avatarUrl || placeholderImage} alt="A man's profile picture."/></Link>
                <IconComment src={like} alt="like button"/>
                <StyledLink to={`/profile/${id}`}><Username comment="true" fontSize="0.8rem">{username}</Username></StyledLink>
                <Caption comment="true">{comment}</Caption>
                { id && (id === loggedInUserId) ? 
                <PermissionsBar comment="true"/>
                : null }
            </BoxComment>
    )
}
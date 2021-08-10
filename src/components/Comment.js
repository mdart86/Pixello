import React from 'react'
import { Link } from 'react-router-dom'
//image imports: 
import profilePicture from '../images/profile-picture.jpeg'
import like from '../images/like-pink.svg'
//react component imports: 
import { PermissionsBar } from './PermissionsBar'
//styled component imports:
import { StyledLink } from './styled/StyledLink.styled'
import { Username } from './styled/Username.styled'
import { IconComment } from './styled/Icon.styled'
import { Avatar } from './styled/Avatar.styled'
import { Caption } from './styled/Caption.styled'
import { BoxComment } from './styled/Box.styled'

// add logic to show the permissions bar 
//only when the user is an admin, or is the 
//owner of the post/comment/profile

export const Comment = () => {

    //placeholder to remove errors
    const id = 12345

    return (
       
            <BoxComment>
                <Link to={`/profile/${id}`}><Avatar comment="true" src={profilePicture} alt="A man's profile picture."/></Link>
                <IconComment src={like} alt="like button"/>
                <StyledLink to={`/profile/${id}`}><Username comment="true" fontSize="0.8rem">john_wilson</Username></StyledLink>
                <Caption comment="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Caption>
                <PermissionsBar comment="true"/>
            </BoxComment>
        
    )
}
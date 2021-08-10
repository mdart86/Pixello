import React from 'react'
import { Link } from 'react-router-dom'
//image imports: 
import profilePicture from '../images/profile-picture.jpeg'
//styled component imports: 
import { StyledLink } from './styled/StyledLink.styled'
import { UserMessage } from './styled/UserMessage.styled'
import { TextUserMessages } from './styled/Text.styled'
import { Avatar } from './styled/Avatar.styled'

export const UserMessages = () => {

    //placeholder to remove errors
    const id = 12345
    
    return (
        
        <UserMessage>
            <Link to={`/message/${id}`}><Avatar userMessages="true" src={profilePicture} alt="profile picture"/></Link>
            <StyledLink to={`/message/${id}`}><TextUserMessages>john_wilson</TextUserMessages></StyledLink>
        </UserMessage>
        
    )
}
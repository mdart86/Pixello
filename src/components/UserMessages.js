import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import profilePicture from '../images/profile-picture.jpeg'
//import styled components
import { StyledLink } from './styled/StyledLink.styled'
import { UserMessage } from './styled/UserMessage.styled'
import { TextUserMessages } from './styled/Text.styled'
import { Avatar } from './styled/Avatar.styled'

export const UserMessages = () => {
    return (
        
        <UserMessage>
            <Link to="/message"><Avatar userMessages="true" src={profilePicture} alt="profile picture"/></Link>
            <StyledLink to="/message"><TextUserMessages>john_wilson</TextUserMessages></StyledLink>
        </UserMessage>
        
    )
}
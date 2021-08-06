import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import profilePicture from '../images/profile-picture.jpeg'
//import styled components
import { StyledLink } from './styled/StyledLink.styled'
import { UserMessage } from './styled/UserMessage.styled'

const Avatar = styled.img`
    height: 65px;
    width: 65px;
    object-fit: cover; 
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid var(--blue);
    margin-right: 10px;
`

const Text = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 1.2rem;
    margin: 10px;
    height: 20px;
`

export const UserMessages = () => {
    return (
        
        <UserMessage>
            <Link to="/message"><Avatar src={profilePicture} alt="profile picture"/></Link>
            <StyledLink to="/message"><Text>john_wilson</Text></StyledLink>
        </UserMessage>
        
    )
}
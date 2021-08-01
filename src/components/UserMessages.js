import React from 'react'
import styled from 'styled-components'
import profilePicture from '../images/profile-picture.jpeg'

export const UserMessages = () => {
    return (
        
        <UserMessage>
            <Avatar src={profilePicture} alt="profile picture"/>
            <Text>john_wilson</Text>
        </UserMessage>
        
    )
}

const UserMessage = styled.div`
    display: flex;
    margin 5px auto;
`

const Avatar = styled.img`
    height: 65px;
    width: 65px;
    object-fit: cover; 
    border-radius: 50%;
    box-sizing: border-box;
    border: 3px solid var(--blue);
    margin-right: 10px;
`

const Text = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 1.2rem;
    margin: 10px;
    height: 20px;
`
import React from 'react'
import styled from 'styled-components'
import profilePicture from '../images/pixello-logo.png'
import { ReceivedMessage } from './ReceivedMessage'

export const Notifications = () => {

    return (
        <>
            <PinkFeature>
                <WhiteFeature/>
            </PinkFeature>
            <DetailsContainer>
                <Avatar src={profilePicture} alt="Pixello Logo"/>
                <Username>Pixello</Username>
                <Bio>Here's where we'll notify you of activity related to your account.</Bio>
            </DetailsContainer>
            <MessagesContainer>
                <ReceivedMessage/>
                <ReceivedMessage/>
                <ReceivedMessage/>
                <ReceivedMessage/>
                <Clearance/>
            </MessagesContainer>
        </>
    )
}

const PinkFeature = styled.div`
    position: absolute; 
    height: 100vh; 
    width: 100%; 
    background: var(--light-pink); 
    top: 0;  
    z-index: -1;  
    display: flex;
    justify-content: center; 
`

const WhiteFeature = styled.div`
    position: absolute; 
    height: 65vh; 
    width: 150%; 
    background: var(--white); 
    bottom: 0; 
    border-radius: 50% 50% 0 0;
    left: -25%;
`

const DetailsContainer = styled.div`
    width: 90%;
    margin: 30px auto 10px;
`

const Avatar = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    float: left;
    margin: 0px 15px 10px 0px;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-sizing: border-box;
`

const Username = styled.p`
    font-family: 'pacifico', cursive;
    margin: 0;
    font-size: 1.2rem;
`

const Bio = styled.p`
    margin: 0;
    font-size: 0.8rem;
`

const MessagesContainer = styled.section`
    margin: 20px auto 5px;
    width: 90%;
    display: flex;
    flex-direction: column;
`

const Clearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
`
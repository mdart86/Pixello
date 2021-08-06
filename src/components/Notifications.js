import React from 'react'
import styled from 'styled-components'
import profilePicture from '../images/pixello-logo.png'
import { ReceivedMessage } from './ReceivedMessage'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Username } from './styled/Username.styled'

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

export const Notifications = () => {

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <DetailsContainer>
                <Avatar src={profilePicture} alt="Pixello Logo"/>
                <Username fontSize="1.2rem">Pixello</Username>
                <Bio>Here's where we'll notify you of activity related to your account.</Bio>
            </DetailsContainer>
            <MessagesContainer>
                <ReceivedMessage notification="true"/>
                <ReceivedMessage notification="true"/>
                <ReceivedMessage notification="true"/>
                <ReceivedMessage notification="true"/>
                {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
            </MessagesContainer>
        </>
    )
}
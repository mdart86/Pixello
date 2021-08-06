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
import { MessagesContainer } from './styled/MessagesContainer.styled'
import { Avatar } from './styled/Avatar.styled'
import { DetailsContainer } from './styled/DetailsContainer.styled'

const Bio = styled.p`
    margin: 0;
    font-size: 0.8rem;
`

export const Notifications = () => {

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <DetailsContainer>
                <Avatar notifications="true" src={profilePicture} alt="Pixello Logo"/>
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
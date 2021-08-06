import React from 'react'
//image imports: 
import profilePicture from '../images/pixello-logo.png'
//react component imports: 
import { ReceivedMessage } from './ReceivedMessage'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Username } from './styled/Username.styled'
import { MessagesContainer } from './styled/MessagesContainer.styled'
import { Avatar } from './styled/Avatar.styled'
import { DetailsContainer } from './styled/DetailsContainer.styled'
import { Bio } from './styled/Bio.styled'

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
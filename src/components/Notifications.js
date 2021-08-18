import React from 'react'
//image imports: 
import profilePicture from '../images/pixello-logo.png'
//react component imports: 
import { ReceivedMessage } from './ReceivedMessage'
import { ComingSoon } from './ComingSoon'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Username } from './styled/Username.styled'
import { MessagesContainer, DetailsContainer } from './styled/Container.styled'
import { Avatar } from './styled/Avatar.styled'
import { Bio } from './styled/Bio.styled'

export const Notifications = () => {

    return (
        <>
            {window.innerWidth < 600 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <DetailsContainer>
                <Avatar unClickable="true" notifications="true" src={profilePicture} alt="Pixello Logo"/>
                <Username fontSize="1.2rem">Pixello</Username>
                <Bio>Here's where we'll notify you of activity related to your account.</Bio>
            </DetailsContainer>
            <MessagesContainer>
                <ReceivedMessage notification="true"/>
                <ReceivedMessage notification="true"/>
                <ReceivedMessage notification="true"/>
                <ReceivedMessage notification="true"/>
                {window.innerWidth < 600 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
            </MessagesContainer>
            <ComingSoon/>
        </>
    )
}
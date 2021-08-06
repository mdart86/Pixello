import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import profilePicture from '../images/profile-picture.jpeg'
import { ReceivedMessage } from './ReceivedMessage'
import plus from '../images/plus-white.svg'
//import styled components
import { StyledLink } from './styled/StyledLink.styled'
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Username } from './styled/Username.styled'
import { Timestamp } from './styled/Timestamp.styled'
import { TextMessage } from './styled/Text.styled'
import { SentMessage } from './styled/SentMessage.styled'
import { MessagesContainer } from './styled/MessagesContainer.styled'
import { NewMessage } from './styled/NewMessage.styled'
import { Avatar } from './styled/Avatar.styled'

const DetailsContainer = styled.div`
    width: 90%;
    margin: 30px auto 10px;
`


const Bio = styled.p`
    margin: 0;
    font-size: 0.8rem;
`


const Circle = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Message = () => {
    
    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <DetailsContainer>
                <Link to="/profile"><Avatar message="true" src={profilePicture} alt="A man's profile picture."/></Link>
                <StyledLink to="/profile"><Username fontSize="1.2rem">john_wilson</Username></StyledLink>
                <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Bio>
            </DetailsContainer>
            <MessagesContainer>
                <ReceivedMessage/>
                <SentMessage>
                    <TextMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextMessage>
                    <Timestamp>dd/mm/yy</Timestamp>
                </SentMessage>
                <ReceivedMessage/>
                <NewMessage>
                    <Circle>
                        <img src={plus} alt="plus sign"/>
                    </Circle>
                </NewMessage>
                {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
            </MessagesContainer>
        </>
    )
}
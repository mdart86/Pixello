import React, { useParams } from 'react'
import { Link } from 'react-router-dom'
//image imports: 
import placeholderImage from '../images/image-loading.png'
import plus from '../images/plus-white.svg'
//react component imports: 
import { ReceivedMessage } from './ReceivedMessage'
//styled component imports: 
import { StyledLink } from './styled/StyledLink.styled'
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Username } from './styled/Username.styled'
import { Timestamp } from './styled/Timestamp.styled'
import { TextMessage } from './styled/Text.styled'
import { SentMessage } from './styled/SentMessage.styled'
import { MessagesContainer, DetailsContainer } from './styled/Container.styled'
import { NewMessage } from './styled/NewMessage.styled'
import { Avatar } from './styled/Avatar.styled'
import { Bio } from './styled/Bio.styled'
import { CircleMessage } from './styled/Circle.styled'

export const Message = () => {
    
    // const { id } = useParams()
    //placeholder to remove routing error
    const id = 12345

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <DetailsContainer>
                <Link to={`/profile/${id}`}><Avatar message="true" src={placeholderImage} alt="A man's profile picture."/></Link>
                <StyledLink to={`/profile/${id}`}><Username fontSize="1.2rem">john_wilson</Username></StyledLink>
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
                    <CircleMessage>
                        <img src={plus} alt="plus sign"/>
                    </CircleMessage>
                </NewMessage>
                {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
            </MessagesContainer>
        </>
    )
}
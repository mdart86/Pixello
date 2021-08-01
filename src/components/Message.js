import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import profilePicture from '../images/profile-picture.jpeg'
import { UserMessage } from './UserMessage'
import plus from '../images/plus-white.svg'

export const Message = () => {
    
    return (
        <>
            <PinkFeature>
                <WhiteFeature/>
            </PinkFeature>
            <DetailsContainer>
                <Link to="/profile"><Avatar src={profilePicture} alt="A man's profile picture."/></Link>
                <StyledLink to="/profile"><Username>john_wilson</Username></StyledLink>
                <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Bio>
            </DetailsContainer>
            <MessagesContainer>
                <UserMessage/>
                <UserMessage/>
                <UserMessage/>
                <NewMessage>
                    <Circle>
                        <Icon src={plus} alt="plus sign"/>
                    </Circle>
                </NewMessage>
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

const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        color: var(--charcoal);
    }
`

const Avatar = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
    float: left;
    margin: 0 15px 10px 0px;
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
    margin: 27px auto 5px;
    width: 90%;
    position: relative;
    left: 0;
    top: 25%;
`

const NewMessage = styled.div`
    height: 50px;
    width: 75%;
    background: var(--white);
    border-radius: 5px;
    margin: 10px 0;
    position: absolute;
    right: 0;
    border: 4px dashed var(--blue);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
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

const Icon = styled.img`
    
`

const Clearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
`
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import placeholder from '../images/placeholder.jpg'
import like from '../images/like-green.svg'
import profilePicture from '../images/profile-picture.jpeg'

export const Post = () => {

    return (
        <>
            <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
            <Container>
                <Link to="/profile"><Avatar src={profilePicture} alt="A man's profile picture."/></Link>
                <Icon src={like} alt="like button"/>
                <StyledLink to="/profile"><Username>john_wilson</Username></StyledLink>
                <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh. </Caption>
            </Container>
        </>
    )
}

const Photo = styled.img`
    max-width: 92%;
    margin: 8px 4% 0 4%;
    border-radius: 5px;
`

const Container = styled.div`
    margin: 0 7%;
`

const Avatar = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    float: left;
    margin-right: 10px;
    margin-top: 2px;
    border-radius: 50%;
    border: 2px solid var(--green);
    box-sizing: border-box;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        color: var(--charcoal);
    }
`

const Username = styled.p`
    font-family: 'pacifico', cursive;
    margin: 0;
    font-size: 0.9rem;
`

const Icon = styled.img`
    float: right;
`

const Caption = styled.p`
    margin: 5px 0;
    font-size: 0.8rem;
`
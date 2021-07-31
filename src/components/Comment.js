import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import profilePicture from '../images/profile-picture.jpeg'
import like from '../images/like-pink.svg'

export const Comment = () => {
    return (
        <>
            <Box>
                <Link to="/profile"><Avatar src={profilePicture} alt="A man's profile picture."/></Link>
                <Icon src={like} alt="like button"/>
                <StyledLink to="/profile"><Username>john_wilson</Username></StyledLink>
                <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Caption>
            </Box>
        </>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        color: var(--charcoal);
    }
`

const Box = styled.div`
    background: var(--blue);
    margin: 0;
    border-radius: 5px;
`

const Avatar = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    float: left;
    margin: 5px 10px 0 5px;
    border-radius: 50%;
    border: 2px solid var(--green);
`

const Username = styled.p`
    font-family: 'pacifico', cursive;
    margin: 0;
    margin-top: 3px;
    font-size: 0.8rem;
`

const Caption = styled.p`
    margin: 5px;
    font-size: 0.7rem;
`

const Icon = styled.img`
    float: right;
    height: 20px;
    margin: 5px;
`
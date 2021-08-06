import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import placeholder from '../images/placeholder.jpg'
import like from '../images/like-green.svg'
import profilePicture from '../images/profile-picture.jpeg'
//import styled components
import { StyledLink } from './styled/StyledLink.styled'
import { Username } from './styled/Username.styled'
import { Photo } from './styled/Photo.styled'
import { IconPost } from './styled/Icon.styled'
import { Avatar } from './styled/Avatar.styled'

const Container = styled.div`
    margin: 0 7%;
`

const Caption = styled.p`
    margin: 5px 0;
    font-size: 0.8rem;
`

export const Post = () => {

    return (
        <>
            <Link to="/view-post"><Photo post="true" src={placeholder} alt="A candid photo of people on the beach."/></Link>
            <Container>
                <Link to="/profile"><Avatar post="true" src={profilePicture} alt="A man's profile picture."/></Link>
                <IconPost src={like} alt="like button"/>
                <StyledLink to="/profile"><Username fontSize="0.9rem">john_wilson</Username></StyledLink>
                <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh. </Caption>
            </Container>
        </>
    )
}
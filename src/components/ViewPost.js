import React from 'react'
import styled from 'styled-components'
import placeholder from '../images/placeholder.jpg'
import like from '../images/like.svg'
import profilePicture from '../images/profile-picture.jpeg'
import film from '../images/film.svg'
import water from '../images/water.svg'
import candid from '../images/candid.svg'

export const ViewPost = () => {

    return (
        <>
            <PinkFeature>
                <WhiteFeature/>
            </PinkFeature>
            <PostContainer>
                <Avatar src={profilePicture} alt="A man's profile picture."/>
                <Username>john_wilson</Username>
                <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Caption>
            <Photo src={placeholder} alt="A candid photo of people on the beach."/>
            <Icon src={like} alt="like button"/>
            <CategoryContainer>
                <Icon src={film} alt="film category"/>
                <Icon water src={water} alt="water category"/>
                <Icon src={candid} alt="candid category"/>
            </CategoryContainer>
            </PostContainer>
        </>
    )
}

const PinkFeature = styled.div`
    position: relative; 
    height: 100vh; 
    width: 100%; 
    background: var(--light-pink); 
    top: 0;  
    z-index: -1;   
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

const PostContainer = styled.section`
    margin: 0 4%;
    position: absolute;
    top: 25px;
`

const CategoryContainer = styled.div`
    float: right;
`

const Photo = styled.img`
    max-width: 100%;
    border-radius: 5px;
    margin-top: 10px;
`

const Avatar = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    float: left;
    margin-right: 10px;
    margin-top: 2px;
    border-radius: 50%;
    border: 2px solid var(--white);
`

const Username = styled.p`
    font-family: 'pacifico', cursive;
    margin: 0;
    font-size: 1.2rem;
`

const Caption = styled.p`
    margin: 0;
    font-size: 0.8rem;
`

const Icon = styled.img`
    ${props => props.water ? "margin-left: 4px;" : null}
`

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Comment } from './Comment'
import { AddComment } from './AddComment'
import placeholder from '../images/placeholder.jpg'
import like from '../images/like-green.svg'
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
                <Link to="/profile"><Avatar src={profilePicture} alt="A man's profile picture."/></Link>
                <StyledLink to="/profile"><Username>john_wilson</Username></StyledLink>
                <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh. Nullam non est quis purus luctus iaculis sed sit amet risus.</Caption>
                <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                <Icon src={like} alt="like button"/>
                <CategoryContainer>
                    <Link to="/filter"><Icon src={film} alt="film category"/></Link>
                    <Link to="/filter"><Icon water="true" src={water} alt="water category"/></Link>
                    <Link to="/filter"><Icon src={candid} alt="candid category"/></Link>
                </CategoryContainer>
                <CommentsContainer>
                    <AddComment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </CommentsContainer>
                <Clearance/>
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

const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        color: var(--charcoal);
    }
`

const Avatar = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    float: left;
    margin: 10px 10px 10px 0;
    border-radius: 50%;
    border: 2px solid var(--white);
    box-sizing: border-box;
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

const Photo = styled.img`
    max-width: 100%;
    border-radius: 5px;
    margin-top: 10px;
`

const Icon = styled.img`
    ${props => props.water ? "margin-left: 4px;" : null}
`

const CategoryContainer = styled.div`
    float: right;
`

const CommentsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(80px, auto);
    column-gap: 10px;
    row-gap: 10px;
    margin-top: 5px;
`

const Clearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
`
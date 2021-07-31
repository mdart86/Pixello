import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import profilePicture from '../images/profile-picture.jpeg'
import placeholder from '../images/placeholder.jpg'

export const Profile = () => {

    return (
        <>
            <PinkFeature>
                <WhiteFeature/>
            </PinkFeature>
            <ProfileContainer>
                <Username>john_wilson</Username>
                <Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh. Nullam non est quis purus luctus iaculis sed sit amet risus.</Caption>
                <Avatar src={profilePicture} alt="profile picture"/>
                <Summary>
                    <Count><Cursive>Posts: </Cursive>9</Count>
                    <Count><Cursive>Likes: </Cursive>2.5K</Count>
                </Summary>
                <GridContainer>
                    <PhotoGrid>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><Photo src={placeholder} alt="A candid photo of people on the beach."/></Link>
                    </PhotoGrid>
                </GridContainer>
            </ProfileContainer>
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

const ProfileContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Username = styled.p`
    font-family: 'pacifico', cursive;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1.5rem;
    width: 70%;
`

const Caption = styled.p`
    margin: 5px auto;
    margin-bottom: 10px;
    font-size: 0.8rem;
    width: 70%;
`

const Avatar = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid var(--white);
`

const Summary = styled.div`
    margin: 0 auto;
    width: 100%;
`

const Count = styled.p`
    margin: 0 20px;
    font-size: 0.9rem;
    display: inline;
`

const Cursive = styled.span`
    font-family: 'Pacifico', cursive;
`

const GridContainer = styled.div`
    width: 100%;
    height: auto;
`

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-auto-rows: 100px;
    row-gap: 8px;
    column-gap: 8px;
    margin: 10px 0;
    margin-bottom: 115px;
    width: 100%;
    justify-content: center;
`

const Photo = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin: 0;
`


import React from 'react'
import styled from 'styled-components'
import profilePicture from '../images/profile-picture.jpeg'
import placeholder from '../images/placeholder.jpg'

export const Profile = () => {

    return (
        <>
            <PinkFeature>
                <Avatar src={profilePicture} alt="profile picture"/>
                <WhiteFeature/>
            </PinkFeature>
            <ProfileContainer>
                <PhotoGrid>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                    <Photo src={placeholder} alt="A candid photo of people on the beach."/>
                </PhotoGrid>
                <Clearance/>
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

const Avatar = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin: 0;
    border-radius: 50%;
    border: 5px solid var(--white);
    position: absolute;
    top: 110px;
    z-index: 1;
`

const ProfileContainer = styled.div`
    height: 50px;
    width: 100%;
    background: yello;
`

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-auto-rows: 100px;
    row-gap: 10px;
    column-gap: 10px;
    margin: 230px 0 10px 0;
    width: 100%;
    justify-content: center;
`

const Photo = styled.img`
    object-fit: cover;
    height: 100px;
    width: 100px;
    border-radius: 5px;
    margin: 0;
`

const Clearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
`
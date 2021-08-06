import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PermissionsBar } from './PermissionsBar'
import profilePicture from '../images/profile-picture.jpeg'
import placeholder from '../images/placeholder.jpg'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'

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

const ProfileContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    ${window.innerWidth >= 450 ? "position: absolute; top: 65px;" : null}
`

const Username = styled.p`
    font-family: 'pacifico', cursive;
    margin: 0 auto;
    margin-top: 30px;
    ${window.innerWidth >= 450 ? "margin-top: 0;" : null}
    font-size: 1.5rem;
    width: 70%;
`

const Bio = styled.p`
    margin: 5px auto;
    margin-bottom: 10px;
    font-size: 0.8rem;
    width: 70%;
`

const AvatarContainer = styled.div`
    width: 90px;
    height: 90px;
    margin: 10px auto;
`

const Avatar = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--white);
    box-sizing: border-box;
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: auto;
    row-gap: 8px;
    column-gap: 8px;
    margin: 10px auto;
    ${window.innerWidth < 450 ? "margin-bottom: 115px;": "margin-bottom: 10px;"}
    width: 90%;
    justify-content: center;
    &>*{
        aspect-ratio: 1 / 1;
    }
`

const Photo = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin: 0;
`

// add logic to show the permissions bar 
//only when the user is an admin, or is the 
//owner of the post/comment/profile

export const Profile = () => {

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : null}
            <ProfileContainer>
                {window.innerWidth < 450 ? <PermissionsBar/> : <PermissionsBar desktop="true"/> }
                <Username>john_wilson</Username>
                <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Bio>
                <AvatarContainer>
                    <Avatar src={profilePicture} alt="profile picture"/>
                </AvatarContainer>
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
                    </PhotoGrid>
                </GridContainer>
            </ProfileContainer>
        </>
    )
}
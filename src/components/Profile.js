import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PermissionsBar } from './PermissionsBar'
import profilePicture from '../images/profile-picture.jpeg'
import placeholder from '../images/placeholder.jpg'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Username } from './styled/Username.styled'
import { Summary } from './styled/Summary.styled'
import { ProfileContainer } from './styled/ProfileContainer.styled'
import { PhotoGrid } from './styled/PhotoGrid.styled'
import { PhotoPreview } from './styled/Photo.styled'
import { Avatar } from './styled/Avatar.styled'

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

// add logic to show the permissions bar 
//only when the user is an admin, or is the 
//owner of the post/comment/profile

export const Profile = () => {

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : null}
            <ProfileContainer>
                {window.innerWidth < 450 ? <PermissionsBar/> : <PermissionsBar desktop="true"/> }
                <Username fontSize="1.5rem" profile="true">john_wilson</Username>
                <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Bio>
                <AvatarContainer>
                    <Avatar profile="true" src={profilePicture} alt="profile picture"/>
                </AvatarContainer>
                <Summary>
                    <Count><Cursive>Posts: </Cursive>9</Count>
                    <Count><Cursive>Likes: </Cursive>2.5K</Count>
                </Summary>
                <GridContainer>
                    <PhotoGrid>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to="/view-post"><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                    </PhotoGrid>
                </GridContainer>
            </ProfileContainer>
        </>
    )
}
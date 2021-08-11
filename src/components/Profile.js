import React from 'react'
import { Link, useParams } from 'react-router-dom'
//image imports: 
import profilePicture from '../images/profile-picture.jpeg'
import placeholder from '../images/placeholder.jpg'
//react component imports: 
import { PermissionsBar } from './PermissionsBar'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Username } from './styled/Username.styled'
import { Summary } from './styled/Summary.styled'
import { ProfileContainer, AvatarContainer, GridContainer } from './styled/Container.styled'
import { PhotoGrid } from './styled/PhotoGrid.styled'
import { PhotoPreview } from './styled/Photo.styled'
import { Avatar } from './styled/Avatar.styled'
import { Span } from './styled/Span.styled'
import { Count } from './styled/Count.styled'
import { Bio } from './styled/Bio.styled'

// NOTE TO SELF: add logic to show the permissions bar 
//only when the user is an admin, or is the 
//owner of the post/comment/profile

export const Profile = () => {
   
    const { id } = useParams()

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : null}
            <ProfileContainer>
                {window.innerWidth < 450 ? <PermissionsBar/> : <PermissionsBar desktop="true"/> }
                <Username fontSize="1.5rem" profile="true">john_wilson</Username>
                <Bio profile="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Bio>
                <AvatarContainer>
                    <Avatar unClickable="true" profile="true" src={profilePicture} alt="profile picture"/>
                </AvatarContainer>
                <Summary>
                    <Count><Span>Posts: </Span>9</Count>
                    <Count><Span>Likes: </Span>2.5K</Count>
                </Summary>
                <GridContainer>
                    <PhotoGrid>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                        <Link to={`/post/${id}`}><PhotoPreview src={placeholder} alt="A candid photo of people on the beach."/></Link>
                    </PhotoGrid>
                </GridContainer>
            </ProfileContainer>
        </>
    )
}
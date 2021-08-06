import React from 'react'
import { Link } from 'react-router-dom'
//image imports:
import placeholder from '../images/placeholder.jpg'
import like from '../images/like-green.svg'
import profilePicture from '../images/profile-picture.jpeg'
import film from '../images/film.svg'
import water from '../images/water.svg'
import candid from '../images/candid.svg'
//react component imports: 
import { Comment } from './Comment'
import { AddComment } from './AddComment'
import { PermissionsBar } from './PermissionsBar'
//styled component imports: 
import { StyledLink } from './styled/StyledLink.styled'
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { Username } from './styled/Username.styled'
import { PostContainer } from './styled/PostContainer.styled'
import { Photo } from './styled/Photo.styled'
import { IconViewPost } from './styled/Icon.styled'
import { Avatar } from './styled/Avatar.styled'
import { CommentsContainer } from './styled/CommentsContainer.styled'
import { CategoryContainer } from './styled/CategoryContainer.styled'
import { Caption } from './styled/Caption.styled'

// add logic to show the permissions bar 
//only when the user is an admin, or is the 
//owner of the post/comment/profile

export const ViewPost = () => {

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : null}
            <PostContainer>
                {window.innerWidth < 450 ? <PermissionsBar/> : <PermissionsBar desktop="true"/> }
                <Link to="/profile"><Avatar viewPost="true" src={profilePicture} alt="A man's profile picture."/></Link>
                <StyledLink to="/profile"><Username fontSize="1.2rem" viewPost="true">john_wilson</Username></StyledLink>
                <Caption viewPost="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Caption>
                <Photo viewPost="true" src={placeholder} alt="A candid photo of people on the beach."/>
                <IconViewPost src={like} alt="like button"/>
                <CategoryContainer>
                    <Link to="/filter"><IconViewPost src={film} alt="film category"/></Link>
                    <Link to="/filter"><IconViewPost water="true" src={water} alt="water category"/></Link>
                    <Link to="/filter"><IconViewPost src={candid} alt="candid category"/></Link>
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
                {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
            </PostContainer>
        </>
    )
}
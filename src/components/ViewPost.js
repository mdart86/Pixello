import React from 'react'
import { Link, useParams } from 'react-router-dom'
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
    
    const { id } = useParams()

    //make a get request for the post with that ID

    const [postData, setPostData ] = useState("")
    console.log(postData)

    useEffect((id) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtaWdyYWNlZCIsImVtYWlsIjoiaGVsbG9lbWlseW1pbGxzQGdtYWlsLmNvbSIsImltYWdlSWQiOiJhaWF0NmZnMHpjYWk4aHUzZXVjaSIsImJpbyI6IkhleSwgSSdtIEVtaWx5ISIsIl9pZCI6IjYxMTBkMGQyZjk2ZDg4MDAwNDFkMTU2ZCIsImlhdCI6MTYyODQ5MTk4Nn0.C0rveSGiiSs4pIqw2VPxlNnk4nPLwhN4GcOXxVaHZ1I"
        const authorisation = {
            headers: { Authorization: `Bearer ${token}` }
        };
        async function fetchData() {
            await axios.get(`https://pixello.herokuapp.com/posts/${id}`, authorisation)
                .then(res => {
                    const postData = res.data
                    setPostData(postData)
                    console.log(postData)
                    
                })
                .catch(err => console.log(err))
        }
        fetchData()
    }, [])

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : null}
            <PostContainer>
                {window.innerWidth < 450 ? <PermissionsBar/> : <PermissionsBar desktop="true"/> }
                <Link to={`/profile/${id}`}><Avatar viewPost="true" src={profilePicture} alt="A man's profile picture."/></Link>
                <StyledLink to={`/profile/${id}`}><Username fontSize="1.2rem" viewPost="true">john_wilson</Username></StyledLink>
                <Caption viewPost="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel placerat nibh.</Caption>
                <Photo unClickable="true" viewPost="true" src={placeholder} alt="A candid photo of people on the beach."/>
                <IconViewPost src={like} alt="like button"/>
                <CategoryContainer>
                    <Link to={`/posts/${category}`}><IconViewPost src={film} alt="film category"/></Link>
                    <Link to={`/posts/${category}`}><IconViewPost water="true" src={water} alt="water category"/></Link>
                    <Link to={`/posts/${category}`}><IconViewPost src={candid} alt="candid category"/></Link>
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
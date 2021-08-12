import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//image imports: 
import like from '../images/like-green.svg'
import placeholderImage from '../images/image-loading.png'
//styled component imports: 
import { StyledLink } from './styled/StyledLink.styled'
import { Username } from './styled/Username.styled'
import { Photo } from './styled/Photo.styled'
import { IconPost } from './styled/Icon.styled'
import { Avatar } from './styled/Avatar.styled'
import { ContainerPost } from './styled/Container.styled'
import { Caption } from './styled/Caption.styled'

export const Post = ({ post }) => {

    //deconstruct post data for use in render
    const {username, caption, photoUrl, id, userId, likes} = post 

    console.log("likes: ", likes)
    const { store } = useGlobalState()
    const { loggedInJWT } = store

    //stores data retreived by the axios request
    const [userData, setUserData ] = useState("")
    
    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        async function fetchData() {
            await axios.get(`https://pixello.herokuapp.com/users/${userId}`, authorisation)
                .then(res => {
                    setUserData(res.data)
                })
                .catch(err => console.log(err))
        }
        fetchData()
        return () => {
            setUserData("")
        }
    }, [userId, loggedInJWT])


    function handleLike() {
        async function addLike(jwt, postId) {
            const authorisation = {
                headers: { Authorization: `Bearer ${jwt}` }
            };
            await axios.put(`https://pixello.herokuapp.com/posts/update_likes/${postId}`, authorisation)
                .catch(err => console.log(err))
        }
        addLike(loggedInJWT, id)
    }

    return (
        <>
            <Link to={`/post/${id}`}><Photo post="true" src={photoUrl || placeholderImage} alt={caption}/></Link>
            <ContainerPost>
                <Link to={`/profile/${userId}`}><Avatar post="true" src={userData.avatarUrl || placeholderImage} alt="profile picture"/></Link>
                <IconPost src={like} alt="like button" onClick={handleLike}/>
                <StyledLink to={`/profile/${userId}`}><Username post="true" fontSize="0.9rem">{username}</Username></StyledLink>
                <Caption post="true">{caption}</Caption>
            </ContainerPost>
        </>
    )
}
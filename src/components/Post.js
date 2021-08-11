import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//image imports: 
import like from '../images/like-green.svg'
import profilePicture from '../images/profile-picture.jpeg'
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
    const {username, caption, avatarUrl, id} = post 

    const { store } = useGlobalState()
    const { loggedInJWT } = store

    //stores data retreived by the axios request
    const [userData, setUserData ] = useState("")
    
    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        async function fetchData() {
            await axios.get(`https://pixello.herokuapp.com/posts/${id}`, authorisation)
                .then(res => {
                    setUserData(res.data)
                })
                .catch(err => console.log(err))
        }
        fetchData()
        return () => {
            setUserData("")
        }
    }, [id, loggedInJWT])

    return (
        <>
            <Link to={`/post/${id}`}><Photo post="true" src={avatarUrl} alt={caption}/></Link>
            <ContainerPost>
                <Link to={`/profile/${id}`}><Avatar post="true" src={profilePicture} alt="profile picture"/></Link>
                <IconPost src={like} alt="like button"/>
                <StyledLink to={`/profile/${id}`}><Username post="true" fontSize="0.9rem">{username}</Username></StyledLink>
                <Caption post="true">{caption}</Caption>
            </ContainerPost>
        </>
    )
}
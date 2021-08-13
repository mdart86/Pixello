import React, { useState } from 'react'
import axios from 'axios'
import { useGlobalState } from '../utils/context'
//image imports: 
import edit from '../images/edit.svg'
import deleteIcon from '../images/delete.svg'
//styled component imports: 
import { IconPermissionsBar } from './styled/Icon.styled'
import { BoxPermissionsBar } from './styled/Box.styled'
import { TextFormFeedback } from './styled/Text.styled'

export const PermissionsBar = ( { history, comment, desktop, postId, profileId, commentId } ) => {

    const { dispatch, store } = useGlobalState()
    const { loggedInJWT } = store

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function handleEditPost() {
        history.push(`/update-post/${postId}`)
    }

    async function handleDeleteComment() {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        setLoading(true)
        setError(false)
        await axios.delete(`https://pixello.herokuapp.com/comments/${commentId}`, authorisation)
                .then(() => {
                    setLoading(false)
                    history.push("/home")
                })
                .catch(err => {
                    setLoading(false)
                    setError(true)
                    console.log(err)
                })
    }

    async function handleDeletePost() {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        setLoading(true)
        setError(false)
        await axios.delete(`https://pixello.herokuapp.com/posts/${postId}`, authorisation)
                .then(() => {
                    setLoading(false)
                    history.push("/home")
                })
                .catch(err => {
                    setLoading(false)
                    setError(true)
                    console.log(err)
                })
    }

    async function handleDeleteProfile() {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        setLoading(true)
        setError(false)
        await axios.delete(`https://pixello.herokuapp.com/users/${profileId}`, authorisation)
                .then(() => {
                    setLoading(false)
                    dispatch({
                        type: "logOutUser",
                        data: ""
                    })
                    history.push("/")
                })
                .catch(err => {
                    setLoading(false)
                    setError(true)
                    console.log(err)
                })
    }
    
    if (comment) {
        //styled for comment permissions
        return (
            <BoxPermissionsBar comment="true">
                <IconPermissionsBar comment="true" src={deleteIcon} alt="delete bin icon" onClick={handleDeleteComment}/>
            </BoxPermissionsBar> 
        )
    } if (desktop) {
        //styled for desktop view
        return (
            <BoxPermissionsBar desktop="true">
                <IconPermissionsBar desktop="true" src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar desktop="true" src={deleteIcon} alt="delete bin icon" onClick={(postId && handleDeletePost) || (profileId && handleDeleteProfile)}/>
                {loading ? <TextFormFeedback permissions="true">Loading...</TextFormFeedback> : null}
                {error ? <TextFormFeedback permissions="true">There was a problem with your request.</TextFormFeedback> : null}
            </BoxPermissionsBar> 
        )
    } else {
        //default styling (mobile-first)
        return (
            <BoxPermissionsBar>
                <IconPermissionsBar src={edit} alt="edit pencil icon" onClick={handleEditPost}/>
                <IconPermissionsBar src={deleteIcon} alt="delete bin icon" onClick={(postId && handleDeletePost) || (profileId && handleDeleteProfile)}/>
                {loading ? <TextFormFeedback permissions="true">Loading...</TextFormFeedback> : null}
                {error ? <TextFormFeedback permissions="true">There was a problem with your request.</TextFormFeedback> : null}
            </BoxPermissionsBar> 
        )
    }
}
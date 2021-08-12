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

export const PermissionsBar = ( { history, comment, desktop, postId } ) => {

    const { store } = useGlobalState()
    const { loggedInJWT } = store

    const [error, setError] = useState(false)

    async function handleEdit() {

    }

    async function handleDeletePost() {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        await axios.delete(`https://pixello.herokuapp.com/posts/${postId}`, authorisation)
                .then(() => {
                    setError(false)
                    history.push("/home")
                })
                .catch(err => {
                    setError(true)
                    console.log(err)
                })
    }
    
    if (comment) {
        //styled for comment permissions
        return (
            <BoxPermissionsBar comment="true">
                <IconPermissionsBar comment="true" src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    } if (desktop) {
        //styled for desktop view
        return (
            <BoxPermissionsBar desktop="true">
                <IconPermissionsBar desktop="true" src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar desktop="true" src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    } else {
        //default styling (mobile-first)
        return (
            <BoxPermissionsBar>
                <IconPermissionsBar src={edit} alt="edit pencil icon" onClick={handleEdit}/>
                <IconPermissionsBar src={deleteIcon} alt="delete bin icon" onClick={handleDeletePost}/>
                {error? <TextFormFeedback postpermissions="true">There was a problem with your request.</TextFormFeedback> : null}
            </BoxPermissionsBar> 
        )
    }
}
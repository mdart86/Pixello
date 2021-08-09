import React, { useEffect } from 'react'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//react component imports:
import { Post } from './Post' 
//styled component imports:
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Logo } from './styled/Logo.styled'

export const Home = () => {

    const { store } = useGlobalState()
    const { loggedInUser } = store

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtaWdyYWNlZCIsImVtYWlsIjoiaGVsbG9lbWlseW1pbGxzQGdtYWlsLmNvbSIsImltYWdlSWQiOiJhaWF0NmZnMHpjYWk4aHUzZXVjaSIsImJpbyI6IkhleSwgSSdtIEVtaWx5ISIsIl9pZCI6IjYxMTBkMGQyZjk2ZDg4MDAwNDFkMTU2ZCIsImlhdCI6MTYyODQ5MTk4Nn0.C0rveSGiiSs4pIqw2VPxlNnk4nPLwhN4GcOXxVaHZ1I"
        const authorisation = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get("https://pixello.herokuapp.com/posts/", authorisation)
            .then(res => console.log("Response: " + res))
            .catch(err => console.log(err))
    }, [])

    if (loggedInUser) {
        console.log("Current signed in user is: " + loggedInUser)
    } else {
        console.log("There is no signed in user.")
    }

    return (
        <>
            {window.innerWidth < 450 ? <Logo home="true">Pixello</Logo> : <TopClearance/>}
            <Post/>
            <Post/>
            <Post/>
            {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
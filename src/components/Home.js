import React from 'react'
import { useGlobalState } from '../utils/context'
//react component imports:
import { Post } from './Post' 
//styled component imports:
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Logo } from './styled/Logo.styled'

export const Home = () => {

    const { store } = useGlobalState()
    const { loggedInUser } = store

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
import React, { useContext } from 'react'
import { Context } from '../utils/context'
//react component imports:
import { Post } from './Post' 
//styled component imports:
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Logo } from './styled/Logo.styled'

export const Home = () => {

    const [state, dispatch ] = useContext(Context)

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
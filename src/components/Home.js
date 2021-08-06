import React from 'react'
import styled from 'styled-components'
import { Post } from './Post' 
//import styled components 
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Logo } from './styled/Logo.styled'

export const Home = () => {

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
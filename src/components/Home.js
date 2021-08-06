import React from 'react'
import styled from 'styled-components'
import { Post } from './Post' 
//import styled components 
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    margin: 5px 0 0 0;
`

export const Home = () => {

    return (
        <>
            {window.innerWidth < 450 ? <Logo>Pixello</Logo> : <TopClearance/>}
            <Post/>
            <Post/>
            <Post/>
            {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
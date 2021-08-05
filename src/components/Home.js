import React from 'react'
import styled from 'styled-components'
import { Post } from './Post' 

const TopClearance = styled.div`
    width: 100%;
    height: 65px;
`

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    margin: 5px 0 0 0;
`

const BottomClearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
    ${props => props.desktop ? "height: 10px;" : null}
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
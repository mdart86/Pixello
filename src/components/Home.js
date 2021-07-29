import React from 'react'
import styled from 'styled-components'
import { Post } from './Post'

export const Home = () => {
    return (
        <>
            <Logo>Pixello</Logo>
            <Post/>
            <Post/>
            <Post/>
            <Clearance/>
        </>
    )
}

const Clearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
`

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    margin: 5px 0 0 0;
`



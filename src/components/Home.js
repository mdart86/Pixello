import React from 'react'
import styled from 'styled-components'
import { Post } from './Post'

export const Home = () => {
    return (
        <>
            <Title>Pixello</Title>
            <Post/>
            <Post/>
            <Post/>
        </>
    )
}

const Title = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    margin: 5px 0 0 0;
`



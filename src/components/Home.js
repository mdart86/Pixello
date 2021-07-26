import React from 'react'
import styled from 'styled-components'

export const Home = () => {
    return (
        <>
            <Title>Pixello</Title>
        </>
    )
}

const Title = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    margin: 0;
    margin-top: 8px;
`

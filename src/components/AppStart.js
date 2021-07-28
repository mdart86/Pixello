import React from 'react'
import styled from 'styled-components'

export const AppStart = () => {
    return (
        <>
            <Container>
                <Title>Pixello</Title>
                <Tagline>where the magic happens</Tagline>
                <Circle pink small></Circle>
                <Circle pink medium></Circle>
                <Circle green small></Circle>
                <Circle green medium></Circle>
                <Circle green large></Circle>
                <Circle blue small></Circle>
                <Circle blue medium></Circle>
                <Circle blue large></Circle>
            </Container>
        </>
    )
}

const Container = styled.body`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

const Title = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    margin: 5px 0 0 0;
`

const Tagline = styled.h2`
    text-align: center;
    color: var(--green);
    font-size: 0.7rem;
`

const Circle = styled.div`
    border-radius: 50%;
    ${props => props.small ? "height: 50px; width: 50px;" : null}
    ${props => props.medium ? "height: 100px; width: 100px;" : null}
    ${props => props.large ? "height: 200px; width: 200px;" : null}
    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.green ? "background: var(--green);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}

`

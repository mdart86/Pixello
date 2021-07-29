import React from 'react'
import styled from 'styled-components'

export const LogIn = () => {
    return (
        <>
            <PinkFeature>
            <Header>Welcome back!</Header>
                <WhiteFeature/>
            </PinkFeature>
        </>
    )
}

const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    text-align: center;
    margin: 0;
    padding-top: 50px;
`

const PinkFeature = styled.div`
    position: relative; 
    height: 100vh; 
    width: 100%; 
    background: var(--light-pink); 
    top: 0;  
    z-index: -1;   
`

const WhiteFeature = styled.div`
    position: absolute; 
    height: 65vh; 
    width: 150%; 
    background: var(--white); 
    bottom: 0; 
    border-radius: 50% 50% 0 0;
    left: -25%;
`

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logout from '../images/log-out.svg'

//logout is currently redirecting to the home page
//this is because home is currently the only content
//will adjust this eventually to the AppStart page

export const Logout = () => {
    return (
        <>
            <Container>
                <BackgroundCircle>
                    <Link to="/"><Icon src={logout} alt="logout icon"/></Link>
                </BackgroundCircle>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    width: 50px;
`

const BackgroundCircle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: var(--green);
    position: fixed;
    margin: -15px -15px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: inset(0 10px 0 0); 
`

const Icon = styled.img`
    height: 23px;
    margin-top: 15px;
    margin-right: 5px;
    
`

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
            <BackgroundCircle>
                <Link to="/home"><Icon src={logout} alt="logout icon"/></Link>
            </BackgroundCircle>
        </>
    )
}

const BackgroundCircle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: var(--green);
    position: fixed;
    right: -15px;
    top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.img`
    height: 23px;
    margin-top: 10px;
    margin-right: 10px;
    
`

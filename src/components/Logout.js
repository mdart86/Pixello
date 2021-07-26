import React from 'react'
import styled from 'styled-components'
import logout from '../images/log-out.svg'

export const Logout = () => {
    return (
        <>
            <BackgroundCircle>
                <Icon src={logout} alt="logout icon"/>
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

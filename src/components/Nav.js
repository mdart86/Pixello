import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import category from '../images/category-search.svg'
import plus from '../images/plus.svg'
import messages from '../images/messages.svg'
import notifications from '../images/notifications.svg'
import profile from '../images/profile.svg'

export const Nav = () => {
    return (
        <>
            <Box>
                <Link to="/new"><PlusIcon src={plus} alt="plus sign icon"/></Link>
                <IconsContainer>
                    <Link to="/filter"><Icon category="true" src={category} alt="search by category icon"/></Link>
                    <Link to="/messages"><Icon src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><Icon src={notifications} alt="notification bell icon"/></Link>
                    <Link to="/profile"><Icon profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </Box>
        </>
    )
}

const Box = styled.nav`
    background: var(--white);
    width: 100%;
    max-width: 600px;
    height: 80px;
    position: fixed;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 3px grey; 
    z-index: 5;
    
    &:before {
        content: "";
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--charcoal);
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -30px;
    }
`

const PlusIcon = styled.img`
    position: absolute;
    top: -35px;
    left: 50%;
    margin-left: -35px;
    height: 70px;
    width: 70px;  
`

const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`

const Icon = styled.img`
    height: 30px;
`

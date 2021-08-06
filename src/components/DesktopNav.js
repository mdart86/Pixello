import React from 'react'
import styled from 'styled-components'
import Logout from './Logout'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import home from '../images/home.svg'
import category from '../images/category-search.svg'
import plus from '../images/plus-green.svg'
import messages from '../images/messages.svg'
import notifications from '../images/notifications.svg'
import profile from '../images/profile.svg'
//import styled components
import { PlusIcon } from './styled/PlusIcon.styled';
import { Logo } from './styled/Logo.styled'
import { IconsContainer } from './styled/IconsContainer.styled';

const Box = styled.nav`
    display: flex;
    align-items: center;
    justify-content: right;
    background: var(--light-pink);
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    &:before {
        ${window.location.pathname !== "/new" ? "content: ''; width: 60px; height: 60px; border-radius: 50%; background: var(--charcoal); position: absolute; top: 30px; right: 30px;" : null}
    }
`

const Icon = styled.img`
    height: 30px;
    margin: 0;
`

const DesktopNav = ( { excludedUrls } ) => {
    if (excludedUrls.includes(window.location.pathname)) {
        return null
    } 
    return (
        <Box>
            <Logout excludedUrls={excludedUrls} left="true"/>
            {window.location.pathname !== "/new" ? <Link to="/new"><PlusIcon desktop="true"src={plus} alt="plus sign icon"/></Link> : null}
            <Logo desktop="true">Pixello</Logo>
            <IconsContainer desktop="true">
                {window.location.pathname === "/home" ? <Link to="/filter"><Icon src={category} alt="search by category icon"/></Link> : <Link to="/home"><Icon src={home} alt="home page icon"/></Link>}
                <Link to="/messages"><Icon src={messages} alt="private messages icon"/></Link>
                <Link to="/notifications"><Icon src={notifications} alt="notification bell icon"/></Link>
                <Link to="/profile"><Icon profile="true" src={profile} alt="user profile icon"/></Link>
            </IconsContainer>
        </Box>
    )
}

export default withRouter(DesktopNav)
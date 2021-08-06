import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import home from '../images/home.svg'
import category from '../images/category-search.svg'
import plus from '../images/plus-green.svg'
import messages from '../images/messages.svg'
import notifications from '../images/notifications.svg'
import profile from '../images/profile.svg'
//import styled components 
import { PlusIcon } from './styled/Icon.styled'
import { IconsContainer } from './styled/IconsContainer.styled'
import { IconMobileNav } from './styled/Icon.styled'

const Box = styled.nav`
    background: var(--white);
    width: 100%;
    max-width: 450px;
    height: 80px;
    position: fixed;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 3px grey; 
    z-index: 5;
    &:before {
        ${window.location.pathname !== "/new" ? "content: ''; width: 60px; height: 60px; border-radius: 50%; background: var(--charcoal); position: absolute; top: -30px; left: 50%; margin-left: -30px;" : null}
    }
    ${window.location.pathname === "/new" ? "background: var(--blue);" : null}
    ${window.location.pathname === "/messages" ? "background: var(--green);" : null}
    ${window.location.pathname === "/notifications" ? "background: var(--light-pink);" : null}
`

const MobileNav = ({ excludedUrls }) => {
    if (excludedUrls.includes(window.location.pathname)) {
        return null
    }
    return (
        <Box>
            {window.location.pathname !== "/new" ? <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link> : null}
            <IconsContainer mobile="true">
                {window.location.pathname === "/home" ? <Link to="/filter"><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                <Link to="/profile"><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
            </IconsContainer>
        </Box>
    )
}

export default withRouter(MobileNav)
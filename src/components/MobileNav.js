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
import { BoxMobileNav } from './styled/Box.styled';

const MobileNav = ({ excludedUrls }) => {
    if (excludedUrls.includes(window.location.pathname)) {
        return null
    }
    return (
        <BoxMobileNav>
            {window.location.pathname !== "/new" ? <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link> : null}
            <IconsContainer mobile="true">
                {window.location.pathname === "/home" ? <Link to="/filter"><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                <Link to="/profile"><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
            </IconsContainer>
        </BoxMobileNav>
    )
}

export default withRouter(MobileNav)
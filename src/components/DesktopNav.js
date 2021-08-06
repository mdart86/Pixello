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
import { PlusIcon } from './styled/Icon.styled'
import { Logo } from './styled/Logo.styled'
import { IconsContainer } from './styled/IconsContainer.styled'
import { IconDesktopNav } from './styled/Icon.styled'
import { BoxDesktopNav } from './styled/Box.styled';

const DesktopNav = ( { excludedUrls } ) => {
    if (excludedUrls.includes(window.location.pathname)) {
        return null
    } 
    return (
        <BoxDesktopNav>
            <Logout excludedUrls={excludedUrls} left="true"/>
            {window.location.pathname !== "/new" ? <Link to="/new"><PlusIcon desktop="true"src={plus} alt="plus sign icon"/></Link> : null}
            <Logo desktop="true">Pixello</Logo>
            <IconsContainer desktop="true">
                {window.location.pathname === "/home" ? <Link to="/filter"><IconDesktopNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconDesktopNav src={home} alt="home page icon"/></Link>}
                <Link to="/messages"><IconDesktopNav src={messages} alt="private messages icon"/></Link>
                <Link to="/notifications"><IconDesktopNav src={notifications} alt="notification bell icon"/></Link>
                <Link to="/profile"><IconDesktopNav profile="true" src={profile} alt="user profile icon"/></Link>
            </IconsContainer>
        </BoxDesktopNav>
    )
}

export default withRouter(DesktopNav)
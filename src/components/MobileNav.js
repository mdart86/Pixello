import React from 'react'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
//image imports: 
import home from '../images/home.svg'
import category from '../images/category-search.svg'
import plus from '../images/plus-green.svg'
import messages from '../images/messages.svg'
import notifications from '../images/notifications.svg'
import profile from '../images/profile.svg'
//styled component imports:
import { PlusIcon } from './styled/Icon.styled'
import { IconsContainer } from './styled/IconsContainer.styled'
import { IconMobileNav } from './styled/Icon.styled'
import { BoxMobileNav, BoxMobileNavNoPlus, BoxMobileNavGreen, BoxMobileNavPink } from './styled/Box.styled';

const MobileNav = ({ excludedUrls }) => {

      //placeholder to remove errors
      const id = 12345

    if (excludedUrls.includes(window.location.pathname)) {
        return null
    } else if (window.location.pathname === "/new") {
        
        return (
            <BoxMobileNavNoPlus>
                <IconsContainer mobile="true">
                    {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                    <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                    <Link to={`/profile/${id}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </BoxMobileNavNoPlus>
        )
    } else if (window.location.pathname === "/messages") {
        return (
            <BoxMobileNavGreen>
                <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link>
                <IconsContainer mobile="true">
                    {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                    <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                    <Link to={`/profile/${id}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </BoxMobileNavGreen>
        )
    } else if (window.location.pathname === "/notifications") {
        return (
            <BoxMobileNavPink>
                <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link>
                <IconsContainer mobile="true">
                    {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                    <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                    <Link to={`/profile/${id}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </BoxMobileNavPink>
        )
    }

    return (
        <BoxMobileNav>
            <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link>
            <IconsContainer mobile="true">
                {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                <Link to={`/profile/${id}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
            </IconsContainer>
        </BoxMobileNav>
    )
}

export default withRouter(MobileNav)
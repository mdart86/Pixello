import React from 'react'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";
import { useGlobalState } from '../utils/context';
//image imports: 
import home from '../images/home.svg'
import category from '../images/category-search.svg'
import plus from '../images/plus-green.svg'
import messages from '../images/messages.svg'
import notifications from '../images/notifications.svg'
import profile from '../images/profile.svg'
//styled component imports:
import { PlusIcon } from './styled/Icon.styled'
import { IconsContainer } from './styled/Container.styled'
import { IconMobileNav } from './styled/Icon.styled'
import { BoxMobileNav, BoxMobileNavNoPlus, BoxMobileNavGreen, BoxMobileNavPink } from './styled/Box.styled';

const MobileNav = ({ excludedUrls }) => {

    const { store } = useGlobalState()
    const { loggedInUserId } = store

    if (excludedUrls.includes(window.location.pathname)) {
        //return null on pages where the nav bar should not be rendered
        return null
    } else if (window.location.pathname === "/new") {
        //return a version of the nav bar without the create-post button
        return (
            <BoxMobileNavNoPlus>
                <IconsContainer mobile="true">
                    {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                    <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                    <Link to={`/profile/${loggedInUserId}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </BoxMobileNavNoPlus>
        )
    } else if (window.location.pathname === "/messages") {
        //return a version of the nav bar styled green
        return (
            <BoxMobileNavGreen>
                <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link>
                <IconsContainer mobile="true">
                    {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                    <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                    <Link to={`/profile/${loggedInUserId}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </BoxMobileNavGreen>
        )
    } else if (window.location.pathname === "/notifications") {
        //return a version of the nav bar styled pink
        return (
            <BoxMobileNavPink>
                <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link>
                <IconsContainer mobile="true">
                    {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                    <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                    <Link to={`/profile/${loggedInUserId}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </BoxMobileNavPink>
        )
    }

    //standard nav bar styling
    return (
        <BoxMobileNav>
            <Link to="/new"><PlusIcon mobile="true"src={plus} alt="plus sign icon"/></Link>
            <IconsContainer mobile="true">
                {window.location.pathname === "/home" ? <Link to='/filter'><IconMobileNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconMobileNav src={home} alt="home page icon"/></Link>}
                <Link to="/messages"><IconMobileNav src={messages} alt="private messages icon"/></Link>
                <Link to="/notifications"><IconMobileNav src={notifications} alt="notification bell icon"/></Link>
                <Link to={`/profile/${loggedInUserId}`}><IconMobileNav profile="true" src={profile} alt="user profile icon"/></Link>
            </IconsContainer>
        </BoxMobileNav>
    )
}

//exported with router for the purpose of conditional statements in app.js that depend on the route
export default withRouter(MobileNav)
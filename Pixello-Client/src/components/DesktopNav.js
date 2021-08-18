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
//react component imports: 
import Logout from './Logout'
//styled component imports: 
import { PlusIcon } from './styled/Icon.styled'
import { Logo } from './styled/Logo.styled'
import { IconsContainer } from './styled/Container.styled'
import { IconDesktopNav } from './styled/Icon.styled'
import { BoxDesktopNav, BoxDesktopNavNoPlus } from './styled/Box.styled';
import { StyledLink } from './styled/StyledLink.styled';

const DesktopNav = ( { excludedUrls } ) => {

    const { store } = useGlobalState()
    const { loggedInUserId } = store

    if (excludedUrls.includes(window.location.pathname)) {
        //return null on pages where the nav bar should not be rendered
        return null
    } else if (window.location.pathname === "/new") {
        //return a version of the nav bar without the create-post button
        return (
            <BoxDesktopNavNoPlus>
                <Logout excludedUrls={excludedUrls} left="true"/>
                {window.location.pathname !== "/home" ? <StyledLink white="true" to="/home"><Logo link="true" desktop="true">Pixello</Logo></StyledLink> : <Logo desktop="true">Pixello</Logo>}
                <IconsContainer desktop="true">
                    {window.location.pathname === "/home" ? <Link to='/filter'><IconDesktopNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconDesktopNav src={home} alt="home page icon"/></Link>}
                    <Link to="/messages"><IconDesktopNav src={messages} alt="private messages icon"/></Link>
                    <Link to="/notifications"><IconDesktopNav src={notifications} alt="notification bell icon"/></Link>
                    <Link to={`/profile/${loggedInUserId}`}><IconDesktopNav profile="true" src={profile} alt="user profile icon"/></Link>
                </IconsContainer>
            </BoxDesktopNavNoPlus>
        )
    }
    return (
        <BoxDesktopNav>
            <Logout excludedUrls={excludedUrls} left="true"/>
            {window.location.pathname !== "/new" ? <Link to="/new"><PlusIcon desktop="true"src={plus} alt="plus sign icon"/></Link> : null}
            {window.location.pathname !== "/home" ? <StyledLink logo="true" white="true" to="/home"><Logo link="true" desktop="true">Pixello</Logo></StyledLink> : <Logo desktop="true">Pixello</Logo>}
            <IconsContainer desktop="true">
                {window.location.pathname === "/home" ? <Link to='/filter'><IconDesktopNav src={category} alt="search by category icon"/></Link> : <Link to="/home"><IconDesktopNav src={home} alt="home page icon"/></Link>}
                <Link to="/messages"><IconDesktopNav src={messages} alt="private messages icon"/></Link>
                <Link to="/notifications"><IconDesktopNav src={notifications} alt="notification bell icon"/></Link>
                <Link to={`/profile/${loggedInUserId}`}><IconDesktopNav profile="true" src={profile} alt="user profile icon"/></Link>
            </IconsContainer>
        </BoxDesktopNav>
    )
}

//exported with router for the purpose of conditional statements in app.js that depend on the route
export default withRouter(DesktopNav)
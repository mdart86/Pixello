import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoutWhite from '../images/log-out-white.svg'
import logoutCharcoal from '../images/log-out-charcoal.svg'
//import styled components
import { IconLogout } from './styled/Icon.styled'
import { BackgroundCircle } from './styled/BackgroundCircle.styled'
import { ContainerLogout } from './styled/Container.styled'

const Logout = ({ excludedUrls, left }) => {

    if (excludedUrls.includes(window.location.pathname)) {
        return null
    } else if (left) {
        return (
            <ContainerLogout left="true">
                <BackgroundCircle left="true">
                    <Link to="/"><IconLogout left="true" src={logoutCharcoal} alt="logout icon"/></Link>
                </BackgroundCircle>
            </ContainerLogout>
        )
    } else {
        return (
            <ContainerLogout>
                <BackgroundCircle>
                    <Link to="/"><IconLogout src={logoutWhite} alt="logout icon"/></Link>
                </BackgroundCircle>
            </ContainerLogout>
        )
    }
}

export default withRouter(Logout)
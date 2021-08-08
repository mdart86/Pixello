import React from 'react'
import { withRouter } from 'react-router'
import { useGlobalState } from '../utils/context'
//image imports: 
import logoutWhite from '../images/log-out-white.svg'
import logoutCharcoal from '../images/log-out-charcoal.svg'
//styled component imports: 
import { IconLogout } from './styled/Icon.styled'
import { BackgroundCircle } from './styled/BackgroundCircle.styled'
import { ContainerLogout } from './styled/Container.styled'

const Logout = ({ excludedUrls, left, history }) => {

    const { dispatch } = useGlobalState()

    function handleLogout(e) {
        dispatch({
            type: "logOutUser",
            data: ""
        })
        history.push("/")
    }

    if (excludedUrls.includes(window.location.pathname)) {
        return null
    } else if (left) {
        return (
            <ContainerLogout left="true">
                <BackgroundCircle left="true">
                    <IconLogout onClick={handleLogout} left="true" src={logoutCharcoal} alt="logout icon"/>
                </BackgroundCircle>
            </ContainerLogout>
        )
    } else {
        return (
            <ContainerLogout>
                <BackgroundCircle>
                    <IconLogout onClick={handleLogout} src={logoutWhite} alt="logout icon"/>
                </BackgroundCircle>
            </ContainerLogout>
        )
    }
}

export default withRouter(Logout)
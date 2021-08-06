import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoutWhite from '../images/log-out-white.svg'
import logoutCharcoal from '../images/log-out-charcoal.svg'
//import styled components
import { IconLogout } from './styled/Icon.styled'

const Container = styled.div`
    position: absolute;
    top: 0;
    ${props => props.left ? "left: 0;" : "right: 0;"}
    height: ${props => props.left ? "100px;" : "50px;"}
    width: ${props => props.left ? "100px;" : "50px;"}
`

const BackgroundCircle = styled.div`
    height: ${props => props.left ? "100px;" : "60px;"}
    width: ${props => props.left ? "100px;" : "60px;"}
    ${props => props.left ? "top: -55px;" : null}
    ${props => props.left ? "left: -20px;" : null}
    border-radius: 50%;
    background: var(--green);
    position: ${props => props.left ? "relative;" : "fixed;"}
    margin: ${props => props.left ? "0;" : "-15px -15px 0 0;"}
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => !props.left ? "clip-path: inset(0 10px 0 0);" : null}
`


const Logout = ({ excludedUrls, left }) => {

    if (excludedUrls.includes(window.location.pathname)) {
        return null
    } else if (left) {
        return (
            <Container left="true">
                <BackgroundCircle left="true">
                    <Link to="/"><IconLogout left="true" src={logoutCharcoal} alt="logout icon"/></Link>
                </BackgroundCircle>
            </Container>
        )
    } else {
        return (
            <Container>
                <BackgroundCircle>
                    <Link to="/"><IconLogout src={logoutWhite} alt="logout icon"/></Link>
                </BackgroundCircle>
            </Container>
        )
    }
}

export default withRouter(Logout)
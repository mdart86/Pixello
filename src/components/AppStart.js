import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AppStart = () => {

    return (
        <>
            <Logo>Pixello</Logo>
            <Tagline>where the magic happens</Tagline>
            <Circle pink small></Circle>
            <Circle pink xlarge>
                <StyledLink to="/sign-up"><Options signup>sign up</Options></StyledLink>
            </Circle>
            <Circle green xsmall></Circle>
            <Circle green small></Circle>
            <Circle green xxlarge>
                <StyledLink to="/about"><Options about="true">About the creators</Options></StyledLink>
            </Circle>
            <Circle blue small></Circle>
            <Circle blue medium>
                <StyledLink to="/log-in"><Options login>log in</Options></StyledLink>
            </Circle>
            <Circle blue large></Circle>
        </>
    )
}

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    margin: 90px 0 0 0;
`

const Tagline = styled.h2`
    text-align: center;
    color: var(--green);
    font-size: 0.7rem;
    margin-top: -10px;
`

const Circle = styled.div`
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);

    ${props => props.xsmall ? "height: 50px; width: 50px;" : null}
    ${props => props.small ? "height: 100px; width: 100px;" : null}
    ${props => props.medium ? "height: 150px; width: 150px;" : null}
    ${props => props.large ? "height: 200px; width: 200px;" : null}
    ${props => props.xlarge ? "height: 250px; width: 250px;" : null}
    ${props => props.xxlarge ? "height: 300px; width: 300px;" : null}

    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.green ? "background: var(--green);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}

    ${props => props.small && props.blue ? "top: -55px; right: -55px; height: 100px; width: 100px;" : null}
    ${props => props.medium && props.blue ? "bottom: -110px; right: 15px;" : null}
    ${props => props.large && props.blue ? "top: -80px; left: -40px;" : null}
    ${props => props.small && props.pink ? "top: -55px; left: 120px; z-index: 2;" : null}
    ${props => props.xlarge && props.pink ? "top: 190px; left: 25px; z-index: 2;" : null}
    ${props => props.xsmall && props.green ? "top: 65px; left: -20px; z-index: 2;" : null}
    ${props => props.small && props.green ? "top: 150px; right: -30px;" : null}
    ${props => props.xxlarge && props.green ? "bottom: -150px; left: -85px;" : null}

`

const Options = styled.div`
    ${props => !props.about ? "font-family: 'Pacifico', cursive; text-shadow: 1px 1px 4px grey;" : null}
    ${props => props.about ? "font-size: 0.9rem; margin-top: -20px; font-style: italic; font-weight: bold;" : null}
    ${props => props.signup ? "font-size: 2.2rem; margin-top: -15px;": null}
    ${props => props.login ? "font-size: 1.3rem; margin-top: -75px;": null}
`

const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        color: var(--white);
    }
`
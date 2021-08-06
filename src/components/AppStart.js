import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//import styled components
import { TextAppStart } from './styled/Text.styled'
import { Tagline } from './styled/Header.styled'
import { Logo } from './styled/Logo.styled'

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


const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        color: var(--white);
    }
    
`

export const AppStart = () => {

    return (
        <>
            <Circle blue="true" large="true"></Circle>
            <Circle pink="true" small="true"></Circle>
            <Circle blue="true" small="true"></Circle>
            <Circle green="true" xsmall="true"></Circle>
            <Logo appStart="true">Pixello</Logo>
            <Tagline>where the magic happens</Tagline>
            <Circle green="true" small="true"></Circle>
            <Circle pink="true" xlarge="true">
                <StyledLink to="/sign-up" white="true"><TextAppStart signup="true">sign up</TextAppStart></StyledLink>
            </Circle>
            <Circle green="true" xxlarge="true">
                <StyledLink to="/about" white="true"><TextAppStart about="true">About the creators</TextAppStart></StyledLink>
            </Circle>
            <Circle blue="true" medium="true">
                <StyledLink to="/log-in" white="true"><TextAppStart login="true">log in</TextAppStart></StyledLink>
            </Circle>
        </>
    )
}


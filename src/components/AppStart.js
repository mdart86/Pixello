import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//import styled components
import { StyledLink } from './styled/StyledLink.styled'
import { TextAppStart } from './styled/Text.styled'
import { Tagline } from './styled/Header.styled'
import { Logo } from './styled/Logo.styled'
import { CircleAppStart } from './styled/Circle.styled'

export const AppStart = () => {

    return (
        <>
            <CircleAppStart blue="true" large="true"></CircleAppStart>
            <CircleAppStart pink="true" small="true"></CircleAppStart>
            <CircleAppStart blue="true" small="true"></CircleAppStart>
            <CircleAppStart green="true" xsmall="true"></CircleAppStart>
            <Logo appStart="true">Pixello</Logo>
            <Tagline>where the magic happens</Tagline>
            <CircleAppStart green="true" small="true"></CircleAppStart>
            <CircleAppStart pink="true" xlarge="true">
                <StyledLink to="/sign-up" white="true"><TextAppStart signup="true">sign up</TextAppStart></StyledLink>
            </CircleAppStart>
            <CircleAppStart green="true" xxlarge="true">
                <StyledLink to="/about" white="true"><TextAppStart about="true">About the creators</TextAppStart></StyledLink>
            </CircleAppStart>
            <CircleAppStart blue="true" medium="true">
                <StyledLink to="/log-in" white="true"><TextAppStart login="true">log in</TextAppStart></StyledLink>
            </CircleAppStart>
        </>
    )
}


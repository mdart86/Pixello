import React from 'react'
import { useGlobalState } from '../utils/context'
//styled component imports: 
import { StyledLink } from './styled/StyledLink.styled'
import { TextAppStart } from './styled/Text.styled'
import { Tagline } from './styled/Header.styled'
import { Logo } from './styled/Logo.styled'
import { CircleAppStart } from './styled/Circle.styled'
import { ContainerAppStart, ClippingContainer } from './styled/Container.styled'

export const AppStart = () => {

    const { store } = useGlobalState()
    const { loggedInUser } = store
    
    if (loggedInUser) {
        console.log("Current signed in user is: " + loggedInUser + ".")
    } else {
        console.log("There is no signed in user.")
    }
    
    return (
        <ContainerAppStart>
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
            <ClippingContainer>
                <CircleAppStart clipAbout="true" green="true" xxlarge="true">
                    <StyledLink to="/about" white="true"><TextAppStart about="true">About <br/>the creators</TextAppStart></StyledLink>
                </CircleAppStart>
                <CircleAppStart clipLogin="true" blue="true" medium="true">
                    <StyledLink to="/log-in" white="true"><TextAppStart login="true">log in</TextAppStart></StyledLink>
                </CircleAppStart>
            </ClippingContainer>
        </ContainerAppStart>
    )
}
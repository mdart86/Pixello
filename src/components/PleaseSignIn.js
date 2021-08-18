import React from 'react'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Header } from './styled/Header.styled'
import { CenteringContainer } from './styled/Container.styled'
import { StyledLink } from './styled/StyledLink.styled'
import { TopClearance } from './styled/TopClearance.styled'

//this component prompts auth on protected pages

export const PleaseSignIn = () => {
    return (
        <>
            {window.innerWidth < 600 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <CenteringContainer pleasesignin="true">
                <Header>Access Denied</Header>
                <p>Please <StyledLink to='/signup' pleasesignin="true">sign up</StyledLink> or <StyledLink to='/login' pleasesignin="true">log in</StyledLink> to access this page.</p>
            </CenteringContainer>
        </>
    )
}
import React from 'react'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Header } from './styled/Header.styled'
import { CenteringContainer } from './styled/CenteringContainer.styled'
import { StyledLink } from './styled/StyledLink.styled'
import { TopClearance } from './styled/TopClearance.styled'

export const PleaseSignIn = () => {
    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <CenteringContainer pleasesignin="true">
                <Header>Access Denied</Header>
                <p>Please <StyledLink to='/sign-up' pleasesignin="true">sign up</StyledLink> or <StyledLink to='/log-in' pleasesignin="true">log in</StyledLink> to access this page.</p>
            </CenteringContainer>
        </>
    )
}

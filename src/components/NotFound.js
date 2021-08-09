import React from 'react'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Header } from './styled/Header.styled'
import { CenteringContainer } from './styled/CenteringContainer.styled'
import { StyledLink } from './styled/StyledLink.styled'
import { TopClearance } from './styled/TopClearance.styled'

export const NotFound = () => {
    
    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <CenteringContainer notfound="true">
                <Header>Page Not Found</Header>
                <p>Oops, looks like this URL is invalid.<br/><StyledLink notfound="true" to="/home">Click here to go back to the home page.</StyledLink></p>
            </CenteringContainer>
        </>
    )
}

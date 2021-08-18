import React from 'react'
//styled component imports: 
import { ComingSoonContainer } from './styled/Container.styled'
import { TextComingSoon } from './styled/Text.styled'

export const ComingSoon = () => {
    return (
        <>
            <ComingSoonContainer>
                <TextComingSoon>Stay tuned! This feature is coming soon to Pixello.</TextComingSoon>
            </ComingSoonContainer>
        </>
    )
}

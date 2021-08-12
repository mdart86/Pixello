import React from 'react'
//react component imports: 
import { UserMessages } from './UserMessages'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { TextMessages } from './styled/Text.styled'
import { MessagesContainer, CenteringContainer } from './styled/Container.styled'
import { CircleMessages } from './styled/Circle.styled'

export const Messages = () => {
    
    return (
        <>
            {window.innerWidth < 600 
            ? 
            <PinkFeature>
                <CircleMessages>
                    <TextMessages new="true">new</TextMessages>
                    <TextMessages>message</TextMessages>
                </CircleMessages>
                <WhiteFeature/>
            </PinkFeature> 
            : 
            <>
            <TopClearance/>
            <CenteringContainer>
                <CircleMessages>
                    <TextMessages new="true">new</TextMessages>
                    <TextMessages>message</TextMessages>
                </CircleMessages>
            </CenteringContainer>
            </>
            }
            <MessagesContainer messages="true">
                <UserMessages/>
                <UserMessages/>
                <UserMessages/>
                <UserMessages/>
            </MessagesContainer>
            {window.innerWidth < 600 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
import React from 'react'
import styled from 'styled-components'
import { UserMessages } from './UserMessages'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { TextMessages } from './styled/Text.styled'
import { MessagesContainer } from './styled/MessagesContainer.styled'
import { CenteringContainer } from './styled/CenteringContainer.styled'
import { CircleMessages } from './styled/Circle.styled'

export const Messages = () => {
    
    return (
        <>
            {window.innerWidth < 450 
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
            {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
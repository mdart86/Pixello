import React from 'react'
import styled from 'styled-components'
import { UserMessages } from './UserMessages'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { TextMessages } from './styled/Text.styled'

const CenteringContainer = styled.div`
    display: flex;
    justify-content: center; 
`

const Circle = styled.div`
    background: var(--white);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px dashed var(--green);
    margin-top: 45px;
    display: flex;
    flex-direction: column;
`

const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${window.innerWidth < 450 ? "margin-top: 210px;": "margin-top: 50px;"}
`

export const Messages = () => {
    
    return (
        <>
            {window.innerWidth < 450 
            ? 
            <PinkFeature>
                <Circle>
                    <TextMessages new="true">new</TextMessages>
                    <TextMessages>message</TextMessages>
                </Circle>
                <WhiteFeature/>
            </PinkFeature> 
            : 
            <>
            <TopClearance/>
            <CenteringContainer>
                <Circle>
                    <TextMessages new="true">new</TextMessages>
                    <TextMessages>message</TextMessages>
                </Circle>
            </CenteringContainer>
            </>
            }
            <MessagesContainer>
                <UserMessages/>
                <UserMessages/>
                <UserMessages/>
                <UserMessages/>
            </MessagesContainer>
            {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
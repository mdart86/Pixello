import React from 'react'
import styled from 'styled-components'
import { UserMessages } from './UserMessages'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'

const TopClearance = styled.div`
    width: 100%;
    height: 65px;
`

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

const Text = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 1.2rem;
    margin: 0 auto;
    height: 20px;
    ${props => props.new ? "margin-top: 10px;" : null}
`

const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${window.innerWidth < 450 ? "margin-top: 210px;": "margin-top: 50px;"}
`

const BottomClearance = styled.div`
    width: 100%;
    height: 110px;
    background: var(--white);
    ${props => props.desktop ? "height: 10px;" : null}
`

export const Messages = () => {
    
    return (
        <>
            {window.innerWidth < 450 
            ? 
            <PinkFeature>
                <Circle>
                    <Text new="true">new</Text>
                    <Text>message</Text>
                </Circle>
                <WhiteFeature/>
            </PinkFeature> 
            : 
            <>
            <TopClearance/>
            <CenteringContainer>
                <Circle>
                    <Text new="true">new</Text>
                    <Text>message</Text>
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
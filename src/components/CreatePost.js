import React from 'react'
import styled from 'styled-components'
import plus from '../images/plus-white.svg'

export const CreatePost = () => {
    
    return (
        <>
            <PinkFeature>
                <WhiteFeature/>
            </PinkFeature>
            <Container>
                <Header>Hey there, john_wilson,</Header>
                <SubHeader>We're excited to see what you'll share!</SubHeader>
                <UploadBox>
                    <Circle>
                        <Icon src={plus} alt="plus sign"/>
                        <Text upload="true">Upload your photo</Text>
                    </Circle>
                </UploadBox>
                <CaptionBox>
                    <Text caption="true">Give it a caption</Text>
                </CaptionBox>
                <Share><Text>Share!</Text></Share>
            </Container>
        </>
    )
}

const PinkFeature = styled.div`
    position: absolute; 
    height: 100vh; 
    width: 100%; 
    background: var(--light-pink); 
    top: 0;  
    z-index: -1;  
    display: flex;
    justify-content: center; 
`

const WhiteFeature = styled.div`
    position: absolute; 
    height: 65vh; 
    width: 150%; 
    background: var(--white); 
    bottom: 0; 
    border-radius: 50% 50% 0 0;
    left: -25%;
`

const Container = styled.div`
    margin: 0 20px;
`

const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    margin: 20px 0 0 0;
    font-size: 1.5rem;
`

const SubHeader = styled.h2`
    margin: 0 0 20px 0;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
`

const UploadBox = styled.div`
    width: 100%;
    height: 150px;
    border: 7px dashed var(--blue);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
`

const Circle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: var(--green);
`

const Icon = styled.img`
    height: 60px;
`

const Text = styled.p`
    ${props => props.upload ? "width: 200px; font-size: 0.8rem; margin-top: 10px; margin-left: -25px;" : null}
    ${props => props.caption ? "margin: 0 auto" : null}
`

const CaptionBox = styled.div`
    border: 2px solid var(--blue);
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 20px;
    width: 85%;
    height: 40px;
`

const Share = styled.div`
    background: var(--green);
    width: 80px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Pacifico', cursive;
    margin: 0 auto;
    margin-top: 20px;
`
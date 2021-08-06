import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Logo } from './styled/Logo.styled'
import { Input } from './styled/Input.styled'
import { IconLogin } from './styled/Icon.styled'

const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    text-align: center;
    margin: 0;
    padding-top: 40px;
`

const BackgroundBox = styled.div`
    width: 65%;
    height: 55vh;
    background: var(--green);
    margin: 140px auto 40px;
    border: 5px solid var(--blue);
    box-sizing: border-box;
    position: relative;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`


const Circle = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -22.5px;
    right: -22.5px;
`

export const LogIn = () => {
    
    return (
        <>
            <PinkFeature>
                <Header>Welcome back!</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><IconLogin back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox>
                <Form>
                    <Input login="true" username="true" type="text" placeholder="Username"/>
                    <Input login="true" type="password" placeholder="Password"/>
                    <Circle>
                        <Link to="/home"><IconLogin forward="true" src={arrow} alt="next steps arrow"/></Link>
                    </Circle>
                </Form>
            </BackgroundBox>
            <Logo login="true">Pixello</Logo>
        </>
    )
}
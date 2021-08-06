import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'

const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    text-align: center;
    margin: 0;
    padding-top: 40px;
`

const Icon = styled.img`
    z-index: 1;
    ${props => props.forward ? "height: 70px;" : null}
    ${props => props.back ? "position: absolute; transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
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

const Input = styled.input`
    background: var(--green);
    border: none;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    font-style: italic;
    font-size: 1.1rem;
    width: 70%;
    margin: 25px auto;
    ${props => props.username ? "margin-top: 35%" : null}
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

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    width: 150px;
    position: absolute;
    bottom: -26px;
    left: 50%;
    margin-left: -75px;
`

export const LogIn = () => {
    
    return (
        <>
            <PinkFeature>
                <Header>Welcome back!</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><Icon back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox>
                <Form>
                    <Input username="true" type="text" placeholder="Username"/>
                    <Input type="password" placeholder="Password"/>
                    <Circle>
                        <Link to="/home"><Icon forward="true" src={arrow} alt="next steps arrow"/></Link>
                    </Circle>
                </Form>
            </BackgroundBox>
            <Logo>Pixello</Logo>
        </>
    )
}
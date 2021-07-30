import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'

export const SignUp = () => {

    return (
        <>
            <PinkFeature>
                <Header>Create your account</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><Icon back src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox>
                <Link to="/home"><Icon forward src={arrow} alt="next steps arrow"/></Link>
            </BackgroundBox>
            <Logo>Pixello</Logo>
        </>
    )
}


const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    text-align: center;
    margin: 0;
    padding-top: 40px;
`

const PinkFeature = styled.div`
    position: absolute; 
    height: 100vh; 
    width: 100%; 
    background: var(--light-pink); 
    top: 0;  
    z-index: -1;   
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

const Icon = styled.img`
    position: absolute;
    z-index: 1;
    ${props => props.forward ? "height: 70px; position: absolute; top: 610px; right: 55px;" : null}
    ${props => props.back ? "transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
`

const BackgroundBox = styled.div`
    width: 65%;
    height: 530px;
    background: var(--green);
    border: 5px solid var(--blue);
    box-sizing: border-box;
    margin: 140px auto 40px;
    &:after{
        content: "";
        height: 90px;
        width: 90px;
        border-radius: 50%;
        background: var(--blue);
        position: absolute;
        top: 600px;
        right: 45px;
    }
`

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    width: 150px;
    margin: 0 auto;
`
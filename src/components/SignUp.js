import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import plus from '../images/plus-white.svg'

export const SignUp = () => {

    return (
        <>
            <PinkFeature>
                <Header>Create your account</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><Icon back src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox>
                <Form>
                    <Input username="true" type="text" id="username" placeholder="Username"/>
                    <Input type="email" id="email" placeholder="Email"/>
                    <Input type="password" id="password" placeholder="Password"/>
                    <Input type="password" id="password-confirmation" placeholder="Confirm password"/>
                    <TextArea id="bio" placeholder="Your bio"/>
                    <p>Your avatar:</p>
                    <Label htmlFor="image-upload">
                        <UploadCircle>
                            <Icon upload="true" src={plus} alt="plus sign"/>
                        </UploadCircle>
                    </Label>
                    <Input type="file" id="image-upload" accept=".png, .jpg, .jpeg" hidden/>
                    <Circle>
                        <Link to="/home"><Icon forward src={arrow} alt="next steps arrow"/></Link>
                    </Circle>

                </Form>
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

const BackgroundBox = styled.div`
    width: 65%;
    height: 700px;
    background: var(--green);
    border: 5px solid var(--blue);
    box-sizing: border-box;
    margin: 140px auto 40px;
    position: relative;
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

const Icon = styled.img`
    z-index: 1;
    ${props => props.upload ? "height: 40px;" : null}
    ${props => props.forward ? "height: 70px;" : null}
    ${props => props.back ? "position: absolute; transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--white);
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
    &:focus {
        outline: none;
        border: 3px solid var(--dark-pink);
    }
    ${props => props.username ? "margin-top: 50px" : null}
`

const TextArea = styled.textarea`
    border: 1px solid var(--white); 
    height: 80px;
    font-style: italic;
    font-size: 1.1rem;
    width: 70%;
    margin: 25px auto;
    background: var(--green);
    color: var(--white);
    max-width: 100%;
    &:focus {
        outline: none;
        border: 3px solid var(--dark-pink);
    }
`

const Label = styled.label`
    background: var(--white);
    margin-top: 25px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 5px dashed var(--blue);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    &:hover {
        cursor: pointer;
    }
`

const UploadCircle = styled.div`
    height: 35px;
    width: 35px;
    background: var(--blue);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    width: 150px;
    margin: 0 auto;
`
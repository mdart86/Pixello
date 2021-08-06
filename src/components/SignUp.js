import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import plus from '../images/plus-white.svg'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Textarea } from './styled/Textarea.styled'
import { PlusCircle } from './styled/PlusCircle.styled'
import { Logo } from './styled/Logo.styled'
import { Label } from './styled/Label.styled'
import { Input } from './styled/Input.styled'

const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    text-align: center;
    margin: 0;
    padding-top: 40px;
`

const BackgroundBox = styled.div`
    width: 65%;
    height: 720px;
    background: var(--green);
    border: 5px solid var(--blue);
    box-sizing: border-box;
    margin: 140px auto 40px;
    position: relative;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--white);
`

const FileName = styled.p`
    margin-top: -5px;
    font-size: 0.8rem;
`

const Icon = styled.img`
    z-index: 1;
    ${props => props.upload ? "height: 40px;" : null}
    ${props => props.forward ? "height: 70px;" : null}
    ${props => props.back ? "position: absolute; transform: rotate(180deg); height: 40px; top: 50vh; margin-top: -20px; left: 3.5%;" : null}
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

export const SignUp = () => {

    const [fileName, setFileName] = useState("No File Chosen")

    function displayFileInfo(e) {
        setFileName(e.target.files[0].name)
    }
    
    return (
        <>
            <PinkFeature>
                <Header>Create your account</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><Icon back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox>
                <Form>
                    <Input signup="true" username="true" type="text" id="username" placeholder="Username"/>
                    <Input signup="true" type="email" id="email" placeholder="Email"/>
                    <Input signup="true" type="password" id="password" placeholder="Password"/>
                    <Input signup="true" type="password" id="password-confirmation" placeholder="Confirm password"/>
                    <Textarea id="bio" placeholder="Your bio" signup="true"/>
                    <p>Your avatar:</p>
                    <FileName>{fileName}</FileName>
                    <Label signup="true" htmlFor="avatar-upload">
                        <PlusCircle signup="true">
                            <Icon upload="true" src={plus} alt="plus sign"/>
                        </PlusCircle>
                    </Label>
                    <Input signup="true" type="file" id="avatar-upload" accept=".png, .jpg, .jpeg" hidden onChange={displayFileInfo}/>
                    <Circle>
                        <Link to="/home"><Icon forward="true" src={arrow} alt="next steps arrow"/></Link>
                    </Circle>
                </Form>
            </BackgroundBox>
            <Logo signup="true">Pixello</Logo>
        </>
    )
}
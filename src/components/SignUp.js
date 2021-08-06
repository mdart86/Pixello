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
import { IconSignUp } from './styled/Icon.styled'
import { BackgroundBox } from './styled/BackgroundBox.styled'
import { Header } from './styled/Header.styled'
import { FileName } from './styled/Filename.styled'
import { Form } from './styled/Form.styled'

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
                <Header signup="true">Create your account</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><IconSignUp back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox signup="true">
                <Form signup="true">
                    <Input signup="true" username="true" type="text" id="username" placeholder="Username"/>
                    <Input signup="true" type="email" id="email" placeholder="Email"/>
                    <Input signup="true" type="password" id="password" placeholder="Password"/>
                    <Input signup="true" type="password" id="password-confirmation" placeholder="Confirm password"/>
                    <Textarea id="bio" placeholder="Your bio" signup="true"/>
                    <p>Your avatar:</p>
                    <FileName>{fileName}</FileName>
                    <Label signup="true" htmlFor="avatar-upload">
                        <PlusCircle signup="true">
                            <IconSignUp upload="true" src={plus} alt="plus sign"/>
                        </PlusCircle>
                    </Label>
                    <Input signup="true" type="file" id="avatar-upload" accept=".png, .jpg, .jpeg" hidden onChange={displayFileInfo}/>
                    <Circle>
                        <Link to="/home"><IconSignUp forward="true" src={arrow} alt="next steps arrow"/></Link>
                    </Circle>
                </Form>
            </BackgroundBox>
            <Logo signup="true">Pixello</Logo>
        </>
    )
}
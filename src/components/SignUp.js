import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//image imports: 
import arrow from '../images/arrow.svg'
import plus from '../images/plus-white.svg'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Textarea } from './styled/Textarea.styled'
import { Logo } from './styled/Logo.styled'
import { Label } from './styled/Label.styled'
import { Input } from './styled/Input.styled'
import { IconSignUp } from './styled/Icon.styled'
import { BackgroundBox } from './styled/BackgroundBox.styled'
import { Header } from './styled/Header.styled'
import { FileName } from './styled/Filename.styled'
import { Form } from './styled/Form.styled'
import { CircleSignup, PlusCircle } from './styled/Circle.styled'

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
                    <CircleSignup>
                        <Link to="/home"><IconSignUp forward="true" src={arrow} alt="next steps arrow"/></Link>
                    </CircleSignup>
                </Form>
            </BackgroundBox>
            <Logo signup="true">Pixello</Logo>
        </>
    )
}
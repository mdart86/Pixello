import React, { useState } from 'react'
import { useGlobalState } from '../utils/context'
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

export const SignUp = ({history}) => {

    //global state
    const { store, dispatch } = useGlobalState()
    const { loggedInUser } = store

    //state and function for showing the filename to the user 
    const [fileName, setFileName] = useState("No File Chosen")

    function displayFileName(e) {
        setFileName(e.target.files[0].name)
        setFormData({
            ...formData,
            avatar: e.target.files[0]
        })
    }

    const initialFormData = { 
        username: "",
        email: "", 
        password: "",
        passwordConfirmation: "",
        bio: "", 
        avatar: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    console.log(formData)
    
    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    function submitFormData(e) {
        e.preventDefault()
        console.log("form submitted")
        // need post request to api to create user
        dispatch({
            type: "setLoggedInUser",
            data: formData.username
        })
        console.log(loggedInUser)
        setFormData(initialFormData)
        console.log(formData)
        history.push('/home')
    }
    

    return (
        <>
            <PinkFeature>
                <Header signup="true">Create your account</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><IconSignUp back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox signup="true">
                <Form signup="true" onSubmit={submitFormData}>
                    <Input required signup="true" username="true" type="text" id="username" placeholder="Username" value={formData.username} onChange={handleFormData}/>
                    <Input required signup="true" type="email" id="email" placeholder="Email" value={formData.email} onChange={handleFormData}/>
                    <Input required signup="true" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleFormData}/>
                    <Input required signup="true" type="password" id="passwordConfirmation" placeholder="Confirm password" value={formData.passwordConfirmation} onChange={handleFormData}/>
                    <Textarea required signup="true" type="text" id="bio" placeholder="Your bio" value={formData.bio} onChange={handleFormData}/>
                    <p>Your avatar:</p>
                    <FileName>{fileName}</FileName>
                    <Label signup="true" htmlFor="avatar">
                        <PlusCircle signup="true">
                            <IconSignUp upload="true" src={plus} alt="plus sign"/>
                        </PlusCircle>
                    </Label>
                    <input required signup="true" type="file" id="avatar" accept=".png, .jpg, .jpeg" hidden onChange={displayFileName}/>
                    <CircleSignup htmlFor="submitButton">
                        <IconSignUp forward="true" src={arrow} alt="next steps arrow"/>
                    </CircleSignup>
                    <input required type="submit" id="submitButton" hidden/>
                </Form>
            </BackgroundBox>
            <Logo signup="true">Pixello</Logo>
        </>
    )
}
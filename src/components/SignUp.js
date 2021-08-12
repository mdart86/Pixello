import React, { useState } from 'react'
import { useGlobalState } from '../utils/context'
import { Link } from 'react-router-dom'
import axios from 'axios'
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
import { BackgroundBox } from './styled/Box.styled'
import { Header } from './styled/Header.styled'
import { FileName } from './styled/Filename.styled'
import { Form } from './styled/Form.styled'
import { PlusCircle } from './styled/Circle.styled'
import { CircleLabel } from './styled/Label.styled'
import { TextFormFeedback } from './styled/Text.styled'

export const SignUp = ({history}) => {

    const { dispatch } = useGlobalState()

    const initialFormData = { 
        username: "",
        email: "", 
        password: "",
        bio: ""
    }

    //used to notify the user if their signup attempt failed
    const [signupFailed, setSignupFailed] = useState("")

    //used to notify the user that their form submission was received
    const [isLoading, setIsLoading] = useState(false)

    //stores form data (except the photo)
    const [formData, setFormData] = useState(initialFormData)

    //used to notify the user of a password mismatch
    const [passwordMatch, setPasswordMatch] = useState(false)
    
    //stores the photo
    const [uploadedPhoto, setUploadedPhoto] = useState("")

    //used to display file name to user when they upload an image
    const [fileName, setFileName] = useState("No File Chosen")

    //save image data to state, and isolate file name to display to user
    function handleImageFile(e) {
        setFileName(e.target.files[0].name)
        setUploadedPhoto(e.target.files[0])
    }
    
    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    function validatePassword() {
        let pass1 = document.getElementById("password")
        let pass2 = document.getElementById("passwordConfirmation")
        if (pass1.value === pass2.value) {
            setPasswordMatch(true)
        } else {
            setPasswordMatch(false)
        }

    }
    
    function submitFormData(e) {
        e.preventDefault()
        if (!passwordMatch) {
            return 
        }
        setIsLoading(true)
        setSignupFailed(false)
        async function fetchData() {
            const fd = new FormData()
            Object.keys(formData).forEach(key => fd.append(key, formData[key]))
            fd.append('image', uploadedPhoto, fileName)
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };
            await axios.post("https://pixello.herokuapp.com/auth/sign_up", fd, config)
                .then(res => {
                    //if a jwt is returned, save to global state for authorisation purposes
                    if (res.data.jwt) {
                        dispatch({
                            type: "setJWT",
                            data: res.data.jwt
                        })
                        dispatch({
                            type: "setLoggedInUsername",
                            data: res.data.username
                        })
                        dispatch({
                            type: "setLoggedInUserId",
                            data: res.data.userId
                        })
                        setIsLoading(false)
                        //redirect to home page
                        history.push('/home')
                    } 
                })
                .catch(err => {
                    setIsLoading(false)
                    setSignupFailed(true)
                    console.log(err)
                })
        }
        fetchData()
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
                    <Input required minLength="3" signup="true" username="true" type="text" id="username" placeholder="Username" value={formData.username} onChange={handleFormData}/>
                    <Input required signup="true" type="email" id="email" placeholder="Email" value={formData.email} onChange={handleFormData}/>
                    <Input required signup="true" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleFormData}/>
                    <Input required signup="true" type="password" id="passwordConfirmation" placeholder="Confirm password" onChange={validatePassword}/>
                    {!passwordMatch && <TextFormFeedback passconf="true">Your passwords must match.</TextFormFeedback>}
                    <Textarea required minLength="3" signup="true" type="text" id="bio" placeholder="Your bio" value={formData.bio} onChange={handleFormData}/>
                    <p>Your avatar:</p>
                    <FileName>{fileName}</FileName>
                    <Label signup="true" htmlFor="image">
                        <PlusCircle signup="true">
                            <IconSignUp upload="true" src={plus} alt="plus sign"/>
                        </PlusCircle>
                    </Label>
                    <input required signup="true" type="file" id="image" name="avatar" accept=".png, .jpg, .jpeg" hidden onChange={handleImageFile}/>
                    <CircleLabel htmlFor="submitButton">
                        <IconSignUp forward="true" src={arrow} alt="next steps arrow"/>
                    </CircleLabel>
                    <input type="submit" id="submitButton" hidden/>
                </Form>
                {isLoading ? <TextFormFeedback signup="true">We're creating <br/>your account...</TextFormFeedback> : null}
                {signupFailed ? <TextFormFeedback signup="true">Your username and <br/>email must be unique, <br/>please try again.</TextFormFeedback> : null}
            </BackgroundBox>
            <Logo signup="true">Pixello</Logo>
        </>
    )
}
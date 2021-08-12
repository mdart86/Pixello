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
import { TextLoginSignup } from './styled/Text.styled'

export const SignUp = ({history}) => {

    const { dispatch } = useGlobalState()

    const initialFormData = { 
        username: "",
        email: "", 
        password: "",
        bio: "", 
        image: ""
    }

    //used to notify the user if their login attempt failed
    const [signupFailed, setSignupFailed] = useState("")

    const [formData, setFormData] = useState(initialFormData)

    //used to display file name to user when they upload an image
    const [fileName, setFileName] = useState("No File Chosen")

    //save image data to state, and isolate file name to display to user
    function handleImageFile(e) {
        setFileName(e.target.files[0].name)
        setFormData({
            ...formData,
            image: e.target.value
        })
    }
    
    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    console.log(formData)
    
    function submitFormData(e) {
        e.preventDefault()
        async function fetchData() {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Credentials': 'same origin'
                }
            };
            await axios.post("https://pixello.herokuapp.com/auth/sign_up", formData, config)
                .then(res => {
                    //if a jwt is returned, save to global state for authorisation purposes
                    if (res.data.jwt) {
                        dispatch({
                            type: "setJWT",
                            data: res.data.jwt
                        })
                        setSignupFailed(false)
                        //redirect to home page
                        history.push('/home')
                    } 
                })
                .catch(err => {
                    setSignupFailed(true)
                    console.log(err)
                })
        }
        fetchData()
    }

    // async function submitFormData(e) {
    //     e.preventDefault()
    //     dispatch({
    //         type: "setLoggedInUser",
    //         data: formData.username
    //     })
    //     // // const data = new FormData(formData)
        
    //     // const config = {
    //     //     headers: {
    //     //         'content-type': 'multipart/form-data',
                        // 'origin': 'https://www.pixellophotos.com/'
    //     //       }
    //     // };
    //     // await axios.post("https://pixello.herokuapp.com/auth/sign_up", formData, config)
    //     //     .then(res => console.log("Response: " + res.data))
    //     //     .catch(err => console.log(err))
    //     // // setFormData(initialFormData)
    //     history.push('/home')
    // }

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
                    {/* <Input required signup="true" type="password" id="passwordConfirmation" placeholder="Confirm password" value={formData.passwordConfirmation} onChange={handleFormData}/> */}
                    <Textarea required signup="true" type="text" id="bio" placeholder="Your bio" value={formData.bio} onChange={handleFormData}/>
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
                {signupFailed ? <TextLoginSignup>Usernames must be unique, please try again.</TextLoginSignup> : null}
            </BackgroundBox>
            <Logo signup="true">Pixello</Logo>
        </>
    )
}
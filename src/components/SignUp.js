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
import { BackgroundBox } from './styled/BackgroundBox.styled'
import { Header } from './styled/Header.styled'
import { FileName } from './styled/Filename.styled'
import { Form } from './styled/Form.styled'
import { CircleSignup, PlusCircle } from './styled/Circle.styled'

export const SignUp = ({history}) => {

    const { dispatch } = useGlobalState()

    const initialFormData = { 
        username: "",
        email: "", 
        password: "",
        bio: "", 
        image: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    //saving the image file name to show to the user 
    const [fileName, setFileName] = useState("No File Chosen")

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

    async function submitFormData(e) {
        e.preventDefault()
        dispatch({
            type: "setLoggedInUser",
            data: formData.username
        })
        // // const data = new FormData(formData)
        
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //       }
        // };
        // await axios.post("https://pixello.herokuapp.com/auth/sign_up", formData, config)
        //     .then(res => console.log("Response: " + res.data))
        //     .catch(err => console.log(err))
        // // setFormData(initialFormData)
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
                    <CircleSignup htmlFor="submitButton">
                        <IconSignUp forward="true" src={arrow} alt="next steps arrow"/>
                    </CircleSignup>
                    <input type="submit" id="submitButton" hidden/>
                </Form>
            </BackgroundBox>
            <Logo signup="true">Pixello</Logo>
        </>
    )
}
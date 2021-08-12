import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//image imports: 
import arrow from '../images/arrow.svg'
//styled component imports:
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { Logo } from './styled/Logo.styled'
import { Input } from './styled/Input.styled'
import { IconLogin } from './styled/Icon.styled'
import { BackgroundBox } from './styled/Box.styled'
import { Header } from './styled/Header.styled'
import { Form } from './styled/Form.styled'
import { CircleLabel } from './styled/Label.styled'
import { TextLoginSignup } from './styled/Text.styled'
import { StyledLink } from './styled/StyledLink.styled'

export const LogIn = ({ history }) => {

    const { dispatch } = useGlobalState()

    const initialFormData = { 
        username: "",
        password: "",
    }

    const [formData, setFormData] = useState(initialFormData)

    //used to notify the user if their login attempt failed
    const [loginFailed, setLoginFailed] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    function submitFormData(e) {
        e.preventDefault()
        async function fetchData() {
            setIsLoading(true)
            setLoginFailed(false)
            await axios.post("https://pixello.herokuapp.com/auth/sign_in", formData)
                .then(res => {
                    //if a jwt is returned, save to global state for authorisation purposes
                    if (res.data.jwt) {
                        dispatch({
                            type: "setJWT",
                            data: res.data.jwt
                        })
                        setIsLoading(false)
                        //redirect to the home page
                        history.push('/home')
                    } 
                })
                .catch(err => {
                    setIsLoading(false)
                    setLoginFailed(true)
                    console.log(err)
                })
        }
        fetchData()
    }

    return (
        <>
            <PinkFeature>
                <Header login="true">Welcome back!</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><IconLogin back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox login="true">
                {isLoading ? <TextLoginSignup>We're checking your credentials...</TextLoginSignup> : null}
                {loginFailed ? <TextLoginSignup>Invalid login, please try again or <StyledLink to="/signup">sign up</StyledLink>.</TextLoginSignup> : null}
                <Form onSubmit={submitFormData}>
                    <Input required login="true" username="true" type="text" id="username" placeholder="Username" value={formData.username} onChange={handleFormData}/>
                    <Input required login="true" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleFormData}/>
                    <CircleLabel htmlFor="submitButton">
                        <IconLogin forward="true" src={arrow} alt="next steps arrow"/>
                    </CircleLabel>
                    <input type="submit" id="submitButton" hidden/>
                </Form>
            </BackgroundBox>
            <Logo login="true">Pixello</Logo>
        </>
    )
}
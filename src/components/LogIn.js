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
import { BackgroundBox } from './styled/BackgroundBox.styled'
import { Header } from './styled/Header.styled'
import { Form } from './styled/Form.styled'
import { CircleLogin } from './styled/Circle.styled'
import { TextLoginSignup } from './styled/Text.styled'
import { StyledLink } from './styled/StyledLink.styled'

export const LogIn = ({ history }) => {

    const { dispatch } = useGlobalState()

    const initialFormData = { 
        username: "",
        password: "",
    }

    const [formData, setFormData] = useState(initialFormData)
    const [loginFailed, setLoginFailed] = useState("")
    
    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    function submitFormData(e) {
        e.preventDefault()
        async function fetchData() {
            await axios.post("https://pixello.herokuapp.com/auth/sign_in", formData)
                .then(res => {
                    if (res.data.jwt) {
                        dispatch({
                            type: "setJWT",
                            data: res.data.jwt
                        })
                        setLoginFailed(false)
                        history.push('/home')
                    } 
                })
                .catch(err => {
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
                {loginFailed ? <TextLoginSignup>Invalid login, please try again or <StyledLink to="/signup">sign up</StyledLink>.</TextLoginSignup> : null}
                <Form onSubmit={submitFormData}>
                    <Input required login="true" username="true" type="text" id="username" placeholder="Username" value={formData.username} onChange={handleFormData}/>
                    <Input required login="true" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleFormData}/>
                    <CircleLogin htmlFor="submitButton">
                        <IconLogin forward="true" src={arrow} alt="next steps arrow"/>
                    </CircleLogin>
                    <input type="submit" id="submitButton" hidden/>
                </Form>
            </BackgroundBox>
            <Logo login="true">Pixello</Logo>
        </>
    )
}
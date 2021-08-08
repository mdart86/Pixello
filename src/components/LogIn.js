import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/context'
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

export const LogIn = ({ history }) => {

    const { dispatch } = useGlobalState()
    
    const initialFormData = { 
        username: "",
        password: "",
    }

    const [formData, setFormData] = useState(initialFormData)
    
    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    function submitFormData(e) {
        e.preventDefault()
        // need request to api to sign user in
        dispatch({
            type: "setLoggedInUser",
            data: formData.username
        })
        setFormData(initialFormData)
        history.push('/home')
    }

    return (
        <>
            <PinkFeature>
                <Header login="true">Welcome back!</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><IconLogin back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox login="true">
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
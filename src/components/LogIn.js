import React from 'react'
import { Link } from 'react-router-dom'
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

export const LogIn = () => {
    
    return (
        <>
            <PinkFeature>
                <Header login="true">Welcome back!</Header>
                <WhiteFeature/>
            </PinkFeature>
            <Link to="/"><IconLogin back="true" src={arrow} alt="go back arrow"/></Link>
            <BackgroundBox login="true">
                <Form>
                    <Input login="true" username="true" type="text" placeholder="Username"/>
                    <Input login="true" type="password" placeholder="Password"/>
                    <CircleLogin>
                        <Link to="/home"><IconLogin forward="true" src={arrow} alt="next steps arrow"/></Link>
                    </CircleLogin>
                </Form>
            </BackgroundBox>
            <Logo login="true">Pixello</Logo>
        </>
    )
}
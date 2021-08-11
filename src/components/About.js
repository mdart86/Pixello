import React from 'react'
import { Link } from 'react-router-dom'
//image imports:
import arrow from '../images/arrow.svg'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'
//styled component imports: 
import { TextAbout } from './styled/Text.styled'
import { Logo } from './styled/Logo.styled'
import { IconsContainer } from './styled/Container.styled'
import { IconAbout } from './styled/Icon.styled'
import { Header } from './styled/Header.styled'
import { CircleAbout } from './styled/Circle.styled'

export const About = () => {
    
    return (
        <>
            <CircleAbout pink="true" medium="true">
                <Link to="/"><IconAbout arrow="true" src={arrow} alt="go back arrow"/></Link>
            </CircleAbout>
            <CircleAbout blue="true" large="true"></CircleAbout>
            <CircleAbout green="true" xlarge="true">
                <Header about="true" title="true">Hey there!</Header>
                <TextAbout para1="true">We're Emily Mills and Michael Dart, and we built Pixello together. Thanks for checking it out!</TextAbout>
                <TextAbout>To reach out to us and keep up with our other work, follow us on Github and Twitter.</TextAbout>
                <TextAbout copywrite="true">&#169; 2021</TextAbout>
            </CircleAbout>
            <CircleAbout pink="true" small="true">
                <Header name="true">Emily</Header>
                <IconsContainer about="true">
                    <a href="https://github.com/emigraced/" target="blank"><IconAbout emily="true" src={github} alt="Emily's github social icon"/></a>
                    <a href="https://twitter.com/emigraced" target="blank"><IconAbout emily="true" src={twitter} alt="Emily's twitter social icon"/></a> 
                </IconsContainer>
            </CircleAbout>
            <CircleAbout blue="true" medium="true">
                <Header name="true">Michael</Header>
                <IconsContainer about="true">
                    <a href="https://github.com/mdart86/" target="blank"><IconAbout michael="true" src={github} alt="Michael's github social icon"/></a>
                    <a href="https://twitter.com/MichaelDart12/" target="blank"><IconAbout michael="true" src={twitter} alt="Michael's twitter social icon"/></a>
                </IconsContainer>
            </CircleAbout>
            <Logo about="true">Pixello</Logo>
        </>
    )
}
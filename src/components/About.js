import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'

const Circle = styled.div`
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    color: var(--white);
    ${props => props.small ? "height: 80px; width: 80px;" : null}
    ${props => props.medium ? "height: 100px; width: 100px;" : null}
    ${props => props.large ? "height: 200px; width: 200px;" : null}
    ${props => props.xlarge ? "height: 330px; width: 330px;" : null}

    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}
    ${props => props.green ? "background: var(--green);" : null}

    ${props => props.green && props.xlarge ? "top: 80px; left: -70px;" : null}
    ${props => props.blue && props.large ? "top: -70px; right: -70px;" : null}
    ${props => props.blue && props.medium ? "top: 330px; left: 105px; z-index: 1;" : null}
    ${props => props.pink && props.small ? "top: 300px; left: 190px; z-index: 2;" : null}
    ${props => props.pink && props.medium ? "top: -20px; left: -20px; z-index: 1;" : null}
`

const Header = styled.h2`
    font-family: 'Pacifico', cursive;
    margin: 0;
    ${props => props.title ? "font-size: 2rem;": "font-size: 1rem;"}
`

const Text = styled.p`
    margin-left: 30px;
    margin-bottom: 0;
    width: 200px;
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;
    ${props => props.para1 ? "width: 210px; margin-left: 40px;" : null}
    ${props => props.copywrite ? "margin-bottom: 20px;" : null}
`

const IconsContainer = styled.div`
    flex-direction: row;
`

const Icon = styled.img`
    margin: 0 2px;
    ${props => props.arrow ? "transform: rotate(180deg) scale(2);" : null}    
    ${props => props.michael ? "height: 30px;" : null}
`

const Logo = styled.h1`
    text-align: center;
    color: var(--dark-pink);
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    width: 150px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    margin: 0 0 0 -75px; 
`

export const About = () => {
    
    return (
        <>
            <Circle pink="true" medium="true">
                <Link to="/"><Icon arrow="true" src={arrow} alt="go back arrow"/></Link>
            </Circle>
            <Circle blue="true" large="true"></Circle>
            <Circle green="true" xlarge="true">
                <Header title="true">Hey there!</Header>
                <Text para1="true">We're Emily Mills and Michael Dart, and we built Pixello together. Thanks for checking it out!</Text>
                <Text>To reach out to us and keep up with our other work, follow us on Github and Twitter.</Text>
                <Text copywrite="true">&#169; 2021</Text>
            </Circle>
            <Circle pink="true" small="true">
                <Header>Emily</Header>
                <IconsContainer>
                    <a href="https://github.com/emigraced/" target="blank"><Icon emily="true" src={github} alt="Emily's github social icon"/></a>
                    <a href="https://twitter.com/emigraced" target="blank"><Icon emily="true" src={twitter} alt="Emily's twitter social icon"/></a> 
                </IconsContainer>
            </Circle>
            <Circle blue="true" medium="true">
                <Header>Michael</Header>
                <IconsContainer>
                    <a href="https://github.com/mdart86/" target="blank"><Icon michael="true" src={github} alt="Michael's github social icon"/></a>
                    <a href="https://twitter.com/MichaelDart12/" target="blank"><Icon michael="true" src={twitter} alt="Michael's twitter social icon"/></a>
                </IconsContainer>
            </Circle>
            <Logo>Pixello</Logo>
        </>
    )
}
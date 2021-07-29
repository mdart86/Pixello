import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'

export const About = () => {
    return (
        <>
            <Circle pink small>
                <Name>Emily</Name>
                <IconsContainer>
                    <a href="https://github.com/emigraced/" target="blank"><Icon emily src={github} alt="Emily's github social icon"/></a>
                    <a href="https://twitter.com/emigraced" target="blank"><Icon emily src={twitter} alt="Emily's twitter social icon"/></a> 
                </IconsContainer>
            </Circle>
            <Circle pink medium>
                <Link to="/"><Icon arrow src={arrow} alt="go back arrow"/></Link>
            </Circle>
            <Circle blue medium>
                <Name>Michael</Name>
                <IconsContainer>
                    <a href="https://github.com/mdart86/" target="blank"><Icon michael src={github} alt="Michael's github social icon"/></a>
                    <a href="https://twitter.com/MichaelDart12/" target="blank"><Icon michael src={twitter} alt="Michael's twitter social icon"/></a>
                </IconsContainer>
            </Circle>
            <Circle blue large></Circle>
            <Circle green xlarge>
                <Title>Hey there!</Title>
                <Text>We're Emily Mills and Michael Dart, and we built Pixello together. Thanks for checking it out!</Text>
                <Text>To reach out to us and keep up with our other work, follow us on Github and Twitter.</Text>
                <Text>&#169; 2021</Text>
            </Circle>
            <Logo>Pixello</Logo>
        </>
    )
}

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
    ${props => props.pink && props.medium ? "top: -20px; left: -20px;" : null}

`

const Title = styled.h2`
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    margin: 0;
`

const Text = styled.p`
    margin-left: 30px;
    width: 200px;
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;
`

const Name = styled.h3`
    margin: 0;
    font-family: 'Pacifico', cursive;
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

const IconsContainer = styled.div`
    flex-direction: row;
`

const Icon = styled.img`
    margin: 0 2px;
    ${props => props.arrow ? "transform: rotate(180deg) scale(2);" : null}    
    ${props => props.michael ? "height: 30px;" : null}
`

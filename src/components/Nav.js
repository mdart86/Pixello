import React from 'react'
import styled from 'styled-components'
import category from '../images/category-search.svg'
import plus from '../images/plus.svg'
import messages from '../images/messages.svg'
import notifications from '../images/notifications.svg'
import profile from '../images/profile.png'


export const Nav = () => {
    return (
        <>
            <Box>
                <PlusIcon src={plus} alt=""/>
                <IconsContainer>
                    <Icon category src={category} alt="search by category"/>
                    <Icon src={messages} alt=""/>
                    <Icon src={notifications} alt=""/>
                    <Icon src={profile} alt=""/>
                </IconsContainer>
            </Box>
        </>
    )
}

const Box = styled.nav`
    background: var(--white);
    height: 75vw;
    width: 150vw;
    border-radius: 50% 50% 0 0; 
    position: fixed;
    bottom: -50vw;
    left: -25vw;
    box-shadow: 0 0 5px grey;

    &:before {
        content: "";
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        background: var(--charcoal);
        position: absolute;
        top: -10vw;
        left: 65vw;
    }
`

const PlusIcon = styled.img`
    position: relative;
    top: -11vw;
    left: 64vw;
    height: 75px;
    color: white;
`

const IconsContainer = styled.div`
    position: relative;
    top: -10vw;
    height: auto;
    width: 100vw;
    left: 25vw;
    display: flex;
    justify-content: space-around;
`

const Icon = styled.img`
    height: 30px;
    ${props => props.profile ? "height: 25px; margin-top: 3px;" : null}
`

import React from 'react'
import styled from 'styled-components'
import edit from '../images/edit.svg'
import deleteIcon from '../images/delete.svg'

const Box = styled.div` 
    position: absolute;
    ${props => props.comment ? "bottom: 1px; right: 1px;" : props.desktop ? "right: 0; top: -5px;" : "top: -1px; left: -1px;"}
    height: ${props => props.comment ? "40px" : "30px"};
    width: ${props => props.comment ? "20px" : "65px"};
    background: ${props => props.comment ? "var(--green)" : "var(--dark-pink)"};
    box-shadow: 0 0 ${props => props.comment ? "2px var(--green)" : "5px var(--dark-pink)"};
    border-radius: 5px;
    display: flex;
    ${props => props.comment ? "flex-direction: column;" : null}
    justify-content: center;
    align-items: center;
`

const Icon = styled.img`
    height: ${props => props.comment ? "15px" : "20px"};
    margin: ${props => props.comment ? "0 2px" : "0 5px"}
`

export const PermissionsBar = ( { comment, desktop } ) => {
    
    if (comment) {
        return (
            <Box comment="true">
                <Icon comment="true" src={edit} alt="edit pencil icon"/>
                <Icon comment="true" src={deleteIcon} alt="delete bin icon"/>
            </Box> 
        )
    } if (desktop) {
        return (
            <Box desktop="true">
                <Icon desktop="true" src={edit} alt="edit pencil icon"/>
                <Icon desktop="true" src={deleteIcon} alt="delete bin icon"/>
            </Box> 
        )
    }else {
        return (
            <Box>
                <Icon src={edit} alt="edit pencil icon"/>
                <Icon src={deleteIcon} alt="delete bin icon"/>
            </Box> 
        )
    }
}
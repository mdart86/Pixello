import React from 'react'
import styled from 'styled-components'
import edit from '../images/edit.svg'
import deleteIcon from '../images/delete.svg'

export const PermissionsBar = () => {
    return (
        <Box>
            <Icon src={edit} alt="edit pencil icon"/>
            <Icon src={deleteIcon} alt="delete bin icon"/>
        </Box>
    )
}

const Box = styled.div`
    position: absolute; 
    top: -1px;
    left: -1px;
    height: 30px;
    width: 65px;
    background: var(--dark-pink);
    box-shadow: 0 0 5px var(--dark-pink); 
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.img`
    height: 20px;
    margin: 0 5px;
`
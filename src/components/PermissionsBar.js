import React from 'react'
import styled from 'styled-components'
import edit from '../images/edit.svg'
import deleteIcon from '../images/delete.svg'
//import styled components
import { IconPermissionsBar } from './styled/Icon.styled'
import { BoxPermissionsBar } from './styled/Box.styled'


export const PermissionsBar = ( { comment, desktop } ) => {
    
    if (comment) {
        return (
            <BoxPermissionsBar comment="true">
                <IconPermissionsBar comment="true" src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar comment="true" src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    } if (desktop) {
        return (
            <BoxPermissionsBar desktop="true">
                <IconPermissionsBar desktop="true" src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar desktop="true" src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    }else {
        return (
            <BoxPermissionsBar>
                <IconPermissionsBar src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    }
}
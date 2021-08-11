import React from 'react'
//image imports: 
import edit from '../images/edit.svg'
import deleteIcon from '../images/delete.svg'
//styled component imports: 
import { IconPermissionsBar } from './styled/Icon.styled'
import { BoxPermissionsBar } from './styled/Box.styled'

export const PermissionsBar = ( { comment, desktop } ) => {
    
    if (comment) {
        //styled for comment permissions
        return (
            <BoxPermissionsBar comment="true">
                <IconPermissionsBar comment="true" src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar comment="true" src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    } if (desktop) {
        //styled for desktop view
        return (
            <BoxPermissionsBar desktop="true">
                <IconPermissionsBar desktop="true" src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar desktop="true" src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    } else {
        //default styling (mobile-first)
        return (
            <BoxPermissionsBar>
                <IconPermissionsBar src={edit} alt="edit pencil icon"/>
                <IconPermissionsBar src={deleteIcon} alt="delete bin icon"/>
            </BoxPermissionsBar> 
        )
    }
}
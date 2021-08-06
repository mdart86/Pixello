import React from 'react'
import styled from 'styled-components'
import plus from '../images/plus-white.svg'
import { PlusIcon } from './styled/Icon.styled'
import { CircleAddComment } from './styled/Circle.styled'

const Box = styled.div`
    background: var(--white);
    margin: 0;
    border-radius: 2px;
    border: 2px dashed var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AddComment = () => {
    return (
       
            <Box>
                <CircleAddComment>
                    <PlusIcon comment="true" src={plus} alt="plus sign"/>
                </CircleAddComment>
            </Box>
       
    )
}
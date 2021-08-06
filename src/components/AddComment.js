import React from 'react'
import styled from 'styled-components'
import plus from '../images/plus-white.svg'
import { PlusIcon } from './styled/Icon.styled'

const Box = styled.div`
    background: var(--white);
    margin: 0;
    border-radius: 2px;
    border: 2px dashed var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Circle = styled.div`
    height: 35px;
    width: 35px;
    background: var(--blue);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AddComment = () => {
    return (
       
            <Box>
                <Circle>
                    <PlusIcon comment="true" src={plus} alt="plus sign"/>
                </Circle>
            </Box>
       
    )
}
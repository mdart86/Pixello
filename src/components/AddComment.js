import React from 'react'
import styled from 'styled-components'
import plus from '../images/plus-white.svg'
import { PlusIcon } from './styled/Icon.styled'
import { CircleAddComment } from './styled/Circle.styled'
import { BoxAddComment } from './styled/Box.styled'

export const AddComment = () => {
    return (
       
            <BoxAddComment>
                <CircleAddComment>
                    <PlusIcon comment="true" src={plus} alt="plus sign"/>
                </CircleAddComment>
            </BoxAddComment>
       
    )
}
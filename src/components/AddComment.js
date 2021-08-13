import React from 'react'
//image imports: 
import plus from '../images/plus-white.svg'
//styled component imports:
import { PlusIcon } from './styled/Icon.styled'
import { CircleAddComment } from './styled/Circle.styled'
import { BoxAddComment } from './styled/Box.styled'

export const AddComment = () => {
    return (
        <>
            <BoxAddComment>
                <CircleAddComment>
                    <PlusIcon comment="true" src={plus} alt="plus sign"/>
                </CircleAddComment>
            </BoxAddComment>
        </>
    )
}
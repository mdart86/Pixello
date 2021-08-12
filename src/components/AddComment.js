import React from 'react'
//image imports: 
import plus from '../images/plus-white.svg'
//styled component imports:
import { PlusIcon } from './styled/Icon.styled'
import { CircleAddComment } from './styled/Circle.styled'
import { BoxAddComment } from './styled/Box.styled'
import { TextNoComments } from './styled/Text.styled'

export const AddComment = ({ noComments }) => {
    return (
        <>
            {noComments ? <TextNoComments>Be the first to add a comment to this post.</TextNoComments> : null }
            <BoxAddComment>
                <CircleAddComment>
                    <PlusIcon comment="true" src={plus} alt="plus sign"/>
                </CircleAddComment>
            </BoxAddComment>
        </>
    )
}
import React from 'react'
//styled component imports: 
import { Timestamp } from './styled/Timestamp.styled'
import { TextReceivedMessage } from './styled/Text.styled'
import { Span } from './styled/Span.styled'
import { BoxReceivedMessage } from './styled/Box.styled'
import { StyledLink } from './styled/StyledLink.styled'
export const ReceivedMessage = ( { notification } ) => {
    
    return (
       
            <BoxReceivedMessage>
                {notification 
                ?                 
                <TextReceivedMessage><StyledLink to={`/profile/${id}`}><Span>john_wilson</Span></StyledLink> liked your comment.</TextReceivedMessage>
                : 
                <TextReceivedMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextReceivedMessage>
                }
                <Timestamp>dd/mm/yy</Timestamp>
            </BoxReceivedMessage>
        
    )
}
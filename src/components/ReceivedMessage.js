import React from 'react'
import styled from 'styled-components'
//import styled components 
import { Timestamp } from './styled/Timestamp.styled'
import { TextReceivedMessage } from './styled/Text.styled'
import { Span } from './styled/Span.styled'
import { BoxReceivedMessage } from './styled/Box.styled'


export const ReceivedMessage = ( { notification } ) => {
    
    return (
       
            <BoxReceivedMessage>
                {notification 
                ?                 
                <TextReceivedMessage><Span>john_wilson</Span> liked your comment.</TextReceivedMessage>
                : 
                <TextReceivedMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextReceivedMessage>
                }
                <Timestamp>dd/mm/yy</Timestamp>
            </BoxReceivedMessage>
        
    )
}
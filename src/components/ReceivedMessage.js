import React from 'react'
import styled from 'styled-components'
//import styled components 
import { Timestamp } from './styled/Timestamp.styled'
import { TextReceivedMessage } from './styled/Text.styled'
import { Span } from './styled/Span.styled'

const Box = styled.div`
    height: auto;
    width: 75%;
    background: var(--blue);
    border-radius: 5px;
    margin: 5px 0;  
`


export const ReceivedMessage = ( { notification } ) => {
    
    return (
       
            <Box>
                {notification 
                ?                 
                <TextReceivedMessage><Span>john_wilson</Span> liked your comment.</TextReceivedMessage>
                : 
                <TextReceivedMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextReceivedMessage>
                }
                <Timestamp>dd/mm/yy</Timestamp>
            </Box>
        
    )
}
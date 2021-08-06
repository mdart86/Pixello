import React from 'react'
import styled from 'styled-components'
//import styled components 
import { Timestamp } from './styled/Timestamp.styled'

const Box = styled.div`
    height: auto;
    width: 75%;
    background: var(--blue);
    border-radius: 5px;
    margin: 5px 0;  
`

const Text = styled.p`
    font-size: 0.8rem;
    padding: 0 10px;
    margin-bottom: 0;
`

const Span = styled.span`
    font-family: 'Pacifico', cursive;
`

export const ReceivedMessage = ( { notification } ) => {
    
    return (
       
            <Box>
                {notification 
                ?                 
                <Text><Span>john_wilson</Span> liked your comment.</Text>
                : 
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                }
                <Timestamp>dd/mm/yy</Timestamp>
            </Box>
        
    )
}
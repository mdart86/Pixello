import React from 'react'
import styled from 'styled-components'

export const UserMessage = ({right}) => {
    
    return (
        <>
            <Box>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Timestamp>dd/mm/yy</Timestamp>
            </Box>
        </>
    )
}

const Box = styled.div`
    height: auto;
    width: 75%;
    background: var(--blue);
    border-radius: 5px;
    margin: 10px 0;
    position: relative;
`

const Text = styled.p`
    font-size: 0.8rem;
    padding: 10px 10px 0;
    margin-bottom: 0;
`

const Timestamp = styled.p`
    font-size: 0.6rem;
    color: var(--green);
    padding-left: 10px;
    margin-top: 5px;
`
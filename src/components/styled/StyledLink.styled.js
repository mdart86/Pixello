import styled from "styled-components"
import { Link } from 'react-router-dom'

//used in: 
//  app start
//  view post
//  user messages
//  post
//  message
//  comment

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:visited {
        ${props => props.white ? "color: var(--white);" : "color: var(--charcoal);"}
    }
`
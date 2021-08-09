import styled from "styled-components"
import { Link } from 'react-router-dom'

//used in: 
//  app start
//  view post
//  user messages
//  post
//  message
//  comment
//  not found

export const StyledLink = styled(Link)`
    ${props => props.notfound || props.pleasesignin ? "text-decoration: underline;" : "text-decoration: none;"}
    &:visited {
        ${props => props.white ? "color: var(--white);" : "color: var(--charcoal);"}
    }
    &:hover {
        ${props => props.notfound || props.pleasesignin ? "opacity: 0.8;" : null}
    }
`
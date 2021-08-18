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
    color: ${props => props.about ? "var(--white);" : "var(--charcoal);"}
    ${props => props.notfound || props.pleasesignin ? "text-decoration: underline;" : "text-decoration: none;"}
    ${props => props.category ? "color: var(--green);" : null}
    &:visited {
        ${props => props.white ? "color: var(--white);" : "color: var(--charcoal);"}
        ${props => props.category ? "color: var(--green);" : null}
    }
    &:hover {
        opacity: 0.7;
    }
`
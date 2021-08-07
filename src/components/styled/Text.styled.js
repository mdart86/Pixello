import styled from "styled-components";

//app start
export const TextAppStart = styled.p`
    margin: 0;
    font-family: 'Pacifico', cursive;
    text-shadow: 1px 1px 4px grey;
    ${props => props.about ? "font-family: 'Roboto', sans-serif; font-size: 0.9rem; margin-top: -15px; font-style: italic; font-weight: bold;" : null}
    ${props => props.signup ? "font-size: 2.2rem; margin-top: -15px;": null}
    ${props => props.login ? "font-size: 1.8rem; margin-top: -20px;": null}
`
//about 
export const TextAbout = styled.p`
    margin-left: 30px;
    margin-bottom: 0;
    width: 200px;
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;
    ${props => props.para1 ? "width: 210px; margin-left: 40px;" : null}
    ${props => props.copywrite ? "margin-bottom: 20px;" : null}
`
//create post
export const TextCreatePost = styled.p`
    margin: 5px;
    font-size: 0.8rem;
    color: var(--green);
    ${props => props.upload ? "font-style: italic; color: var(--charcoal);" : "font-weight: bold;"}
`
//message
export const TextMessage = styled.p`
    font-size: 0.8rem;
    padding: 0 10px;
    margin-bottom: 0;
`
//messages
export const TextMessages = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 1.2rem;
    margin: 0 auto;
    height: 20px;
    ${props => props.new ? "margin-top: 10px;" : null}
`
//received message
export const TextReceivedMessage = styled.p`
    font-size: 0.8rem;
    padding: 0 10px;
    margin-bottom: 0;
`
//user messages
export const TextUserMessages = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 1.2rem;
    margin: 10px;
    height: 20px;
`
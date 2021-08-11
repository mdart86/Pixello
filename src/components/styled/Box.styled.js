import styled from "styled-components";

//used in: 
//  login
//  sign up
export const BackgroundBox = styled.div`
    width: 65%;
    background: var(--green);
    border: 5px solid var(--blue);
    box-sizing: border-box;
    position: relative;
    margin: 140px auto 40px;
    height: ${props => props.login ? "55vh;" : "720px"}
`

//add comment
export const BoxAddComment = styled.div`
    background: var(--white);
    margin: 0;
    border-radius: 2px;
    border: 2px dashed var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
`

//comment
export const BoxComment = styled.div`
    background: var(--blue);
    margin: 0;
    border-radius: 5px;
    position: relative;
`

//desktop nav without create button
export const BoxDesktopNavNoPlus = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: var(--light-pink);
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
`

//desktop nav with create button
export const BoxDesktopNav = styled(BoxDesktopNavNoPlus)`
    &:before {
        content: ''; 
        width: 60px; 
        height: 60px; 
        border-radius: 50%; 
        background: var(--charcoal); 
        position: absolute; 
        top: 30px; 
        right: 30px;
    }
`

//mobile nav without create button
export const BoxMobileNavNoPlus = styled.nav`
    background: var(--blue);
    width: 100%;
    max-width: 450px;
    height: 80px;
    position: fixed;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 3px grey; 
    z-index: 5;
`

//mobile nav with create button
export const BoxMobileNav = styled(BoxMobileNavNoPlus)`
    background: var(--white);
    &:before {
        content: ''; 
        width: 60px; 
        height: 60px; 
        border-radius: 50%; 
        background: var(--charcoal); 
        position: absolute; 
        top: -30px; 
        left: 50%; 
        margin-left: -30px;
    }
`

//mobile nav green background (messages page)
export const BoxMobileNavGreen = styled(BoxMobileNavNoPlus)`
    background: var(--green);
    &:before {
        content: ''; 
        width: 60px; 
        height: 60px; 
        border-radius: 50%; 
        background: var(--charcoal); 
        position: absolute; 
        top: -30px; 
        left: 50%; 
        margin-left: -30px;
    }
`

//mobile nav pink background (notifications page)
export const BoxMobileNavPink = styled(BoxMobileNavNoPlus)`
    background: var(--light-pink);
    &:before {
        content: ''; 
        width: 60px; 
        height: 60px; 
        border-radius: 50%; 
        background: var(--charcoal); 
        position: absolute; 
        top: -30px; 
        left: 50%; 
        margin-left: -30px;
    }
`

//permissions bar
export const BoxPermissionsBar = styled.div` 
    position: absolute;
    ${props => props.comment ? "bottom: 1px; right: 1px;" : props.desktop ? "right: 0; top: -5px;" : "top: -1px; left: -1px;"}
    height: ${props => props.comment ? "40px" : "30px"};
    width: ${props => props.comment ? "20px" : "65px"};
    background: ${props => props.comment ? "var(--green)" : "var(--dark-pink)"};
    box-shadow: 0 0 ${props => props.comment ? "2px var(--green)" : "5px var(--dark-pink)"};
    border-radius: 5px;
    display: flex;
    ${props => props.comment ? "flex-direction: column;" : null}
    justify-content: center;
    align-items: center;
`

//received message
export const BoxReceivedMessage = styled.div`
    height: auto;
    width: 75%;
    background: var(--blue);
    border-radius: 5px;
    margin: 5px 0;  
`
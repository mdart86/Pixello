import styled from "styled-components"

//used in: 
//  log out

export const BackgroundCircle = styled.div`
    height: ${props => props.left ? "100px;" : "60px;"}
    width: ${props => props.left ? "100px;" : "60px;"}
    ${props => props.left ? "top: -55px;" : null}
    ${props => props.left ? "left: -20px;" : null}
    border-radius: 50%;
    background: var(--green);
    position: ${props => props.left ? "relative;" : "fixed;"}
    margin: ${props => props.left ? "0;" : "-15px -15px 0 0;"}
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => !props.left ? "clip-path: inset(0 10px 0 0);" : null}
`

//  create post
//  sign up
export const PlusCircle = styled.div`
    height: ${props => props.createPost ? "60px;" : "35px;"}
    width:  ${props => props.createPost ? "60px;" : "35px;"}
    border-radius: 50%;
    background: ${props => props.createPost ? "var(--green);" : "var(--blue);"}
    ${props => props.createPost ? "margin: 5px;" : null}
    ${props => props.signup ? "display: flex; justify-content: center; align-items: center;" : null}
`

//template circle (inherited by circles below)
const Circle = styled.div`
    border-radius: 50%;
    display: flex; 
    justify-content: center;
    align-items: center;
`

//messages (does not inherit from circle)
export const CircleMessages = styled.div`
    background: var(--white);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px dashed var(--green);
    margin-top: 45px;
    display: flex;
    flex-direction: column;
`

//about 
export const CircleAbout = styled(Circle)`
    position: absolute;
    flex-direction: column; 
    z-index: -1;
    color: var(--white);
    ${props => props.small ? "height: 80px; width: 80px;" : null}
    ${props => props.medium ? "height: 100px; width: 100px;" : null}
    ${props => props.large ? "height: 200px; width: 200px;" : null}
    ${props => props.xlarge ? "height: 330px; width: 330px;" : null}

    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}
    ${props => props.green ? "background: var(--green);" : null}

    ${props => props.green && props.xlarge ? "top: 80px; left: -70px;" : null}
    ${props => props.blue && props.large ? "top: -70px; right: -70px;" : null}
    ${props => props.blue && props.medium ? "top: 330px; left: 105px; z-index: 1;" : null}
    ${props => props.pink && props.small ? "top: 300px; left: 190px; z-index: 2;" : null}
    ${props => props.pink && props.medium ? "top: -20px; left: -20px; z-index: 1;" : null}
`

//add comment
export const CircleAddComment = styled(Circle)`
    height: 35px;
    width: 35px;
    background: var(--blue);
`

//app start
export const CircleAppStart = styled(Circle)`
    position: absolute;
    color: var(--white);

    ${props => props.xsmall ? "height: 10vh; width: 10vh;" : null}
    ${props => props.small ? "height: 20vh; width: 20vh;" : null}
    ${props => props.medium ? "height: 30vh; width: 30vh;" : null}
    ${props => props.large ? "height: 40vh; width: 40vh;" : null}
    ${props => props.xlarge ? "height: 50vh; width: 50vh;" : null}
    ${props => props.xxlarge ? "height: 60vh; width: 60vh;" : null}

    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.green ? "background: var(--green);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}

    ${props => props.small && props.blue ? "top: -7vh; right: -10vh;" : null}
    ${props => props.medium && props.blue ? "bottom: -4vh; right: -4vh; z-index: 2;" : null}
    ${props => props.large && props.blue ? "top: -18vh; left: -15vh; z-index: -1;" : null}
    ${props => props.small && props.pink ? "top: -12vh; left: 20vh; z-index: 2;" : null}
    ${props => props.xlarge && props.pink ? "top: 40vh; left: 5vh; z-index: 2;" : null}
    ${props => props.xsmall && props.green ? "top: 15vh; left: -4vh; z-index: 2;" : null}
    ${props => props.small && props.green ? "top: 30vh; right: -5vh;" : null}
    ${props => props.xxlarge && props.green ? "bottom: -25vh; left: -20vh;" : null}
`

//message
export const CircleMessage = styled(Circle)`
    height: 25px;
    width: 25px;
    background: var(--blue);
`
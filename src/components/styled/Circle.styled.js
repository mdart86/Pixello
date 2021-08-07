import styled from "styled-components"

//used in: 
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

// ${props => props.clipAbout ? "clip-path: inset(0 0 150px 0);" : null}
// ${props => props.clipLogin ? "clip-path: inset(0 0 110px 0);" : null}

//app start
export const CircleAppStart = styled(Circle)`
    position: absolute;
    color: var(--white);

    ${props => props.xsmall ? "height: 50px; width: 50px;" : null}
    ${props => props.small ? "height: 100px; width: 100px;" : null}
    ${props => props.medium ? "height: 150px; width: 150px;" : null}
    ${props => props.large ? "height: 200px; width: 200px;" : null}
    ${props => props.xlarge ? "height: 270px; width: 270px;" : null}
    ${props => props.xxlarge ? "height: 300px; width: 300px;" : null}

    ${props => props.pink ? "background: var(--light-pink);" : null}
    ${props => props.green ? "background: var(--green);" : null}
    ${props => props.blue ? "background: var(--blue);" : null}

    ${props => props.small && props.blue ? "top: -55px; right: -55px; height: 100px; width: 100px;" : null}
    ${props => props.medium && props.blue ? "bottom: 30px; right: -20px; z-index: 2;" : null}
    ${props => props.large && props.blue ? "top: -80px; left: -40px;" : null}
    ${props => props.small && props.pink ? "top: -55px; left: 120px; z-index: 2;" : null}
    ${props => props.xlarge && props.pink ? "top: 210px; left: 50%; margin-left: -135px; z-index: 2;" : null}
    ${props => props.xsmall && props.green ? "top: 65px; left: -20px; z-index: 2;" : null}
    ${props => props.small && props.green ? "top: 150px; right: -30px;" : null}
    ${props => props.xxlarge && props.green ? "bottom: -100px; left: -85px;" : null}
`

// login
export const CircleLogin = styled(Circle)`
    height: 90px;
    width: 90px;
    background: var(--blue);
    position: absolute;
    bottom: -22.5px;
    right: -22.5px;
`

//message
export const CircleMessage = styled(Circle)`
    height: 25px;
    width: 25px;
    background: var(--blue);
`

//signup
export const CircleSignup = styled(Circle)`
    height: 90px;
    width: 90px;
    background: var(--blue);
    position: absolute;
    bottom: -22.5px;
    right: -22.5px;
`

import React, {useState} from 'react'
import styled from 'styled-components'
import plus from '../images/plus-white.svg'

export const CreatePost = () => {
    
    const [fileName, setFileName] = useState("No File Chosen")

    function displayFileInfo(e) {
        setFileName(e.target.files[0].name)
    }
    
    return (
        <>
            <PinkFeature>
                <WhiteFeature/>
            </PinkFeature>
            <Container>
                <Header>Hey there, john_wilson,</Header>
                <SubHeader>We're excited to see what you'll share!</SubHeader>
                <Form>
                    <Label htmlFor="photo-upload">
                        <PlusCircle>
                            <Icon src={plus} alt="plus sign"/>
                        </PlusCircle>
                        <FileName>{fileName}</FileName>
                    </Label>
                    <Input type="file" id="photo-upload" accept=".png, .jpg, .jpeg" hidden onChange={displayFileInfo}/>
                    <TextArea id="caption" placeholder="Give it a caption"/>
                    <Input share="true" type="submit" value="Share!"/>
                </Form>
            </Container>
        </>
    )
}

const PinkFeature = styled.div`
    position: absolute; 
    height: 100vh; 
    width: 100%; 
    background: var(--light-pink); 
    top: 0;  
    z-index: -1;  
    display: flex;
    justify-content: center; 
`

const WhiteFeature = styled.div`
    position: absolute; 
    height: 65vh; 
    width: 150%; 
    background: var(--white); 
    bottom: 0; 
    border-radius: 50% 50% 0 0;
    left: -25%;
`

const Container = styled.div`
    margin: 0 20px;
`

const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    margin: 20px 0 0 0;
    font-size: 1.5rem;
`

const SubHeader = styled.h2`
    margin: 0 0 20px 0;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`

//for the share button, as the other input is hidden
const Input = styled.input`
    border: none;
    font-style: italic;
    font-size: 1rem;
    margin: 10px auto;
    color: var(--white); 
    background: var(--green); 
    width: 80px; 
    height: 35px; 
    border-radius: 5px; 
    font-family: 'Pacifico', cursive;
    &:focus {
        outline: none;
        border: 3px solid var(--dark-pink);
    }
`

const TextArea = styled.textarea`
    box-sizing: border-box;
    border: 3px solid var(--blue); 
    height: 50px;
    font-style: italic;
    font-size: 1rem;
    width: 70%;
    margin: 20px auto;
    background: var(--white);
    color: var(--green);
    max-width: 90%;
    &:focus {
        outline: none;
        border: 3px solid var(--dark-pink);
    }
`

const FileName = styled.p`
    margin: 0;
    font-size: 0.8rem;
    color: var(--green);
`

const Label = styled.label`
    width: 90%;
    margin: 0 auto;
    height: 140px;
    border: 5px dashed var(--blue);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    &:hover {
        cursor: pointer;
    }
`

const PlusCircle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: var(--green);
    margin: 0;
    margin-bottom: 5px;
`

const Icon = styled.img`
    height: 60px;
    margin: 0;
`

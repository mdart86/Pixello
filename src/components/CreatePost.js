import React, {useState} from 'react'
import styled from 'styled-components'
import plus from '../images/plus-white.svg'
//import styled components
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Textarea } from './styled/Textarea.styled'
import { TextCreatePost } from './styled/Text.styled'
import { SubHeader } from './styled/H2s.styled'
import { Select } from './styled/Select.styled'
import { PlusCircle } from './styled/PlusCircle.styled'
import { Label } from './styled/Label.styled'
import { Input } from './styled/Input.styled'
import { PlusIcon } from './styled/Icon.styled'

const Container = styled.section`
    margin: 0 20px;
`

const Header = styled.h1`
    font-family: 'Pacifico', cursive;
    margin: 20px 0 0 0;
    font-size: 1.5rem;
    ${window.innerWidth < 450 ? null : "text-align: center"}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const CreatePost = () => {
    
    const [fileName, setFileName] = useState("No File Chosen")

    function displayFileInfo(e) {
        setFileName(e.target.files[0].name)
    }
    
    return (
        <>  
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <Container>
                <Header>Hey there, john_wilson,</Header>
                <SubHeader>We're excited to see what you'll share!</SubHeader>
                <Form>
                    <Label createPost="true" htmlFor="photo-upload">
                        <TextCreatePost upload="true">Upload your photo</TextCreatePost>
                        <PlusCircle createPost="true">
                            <PlusIcon createPost="true" src={plus} alt="plus sign"/>
                        </PlusCircle>
                        <TextCreatePost>{fileName}</TextCreatePost>
                    </Label>
                    <Input createPost="true" type="file" id="photo-upload" accept=".png, .jpg, .jpeg" hidden onChange={displayFileInfo}/>
                    <Textarea id="caption" placeholder="Give it a caption"/>
                    <Select name="category">
                        <option value="default" hidden>Categories</option>
                        <option value="film">Film</option>
                        <option value="candid">Candid</option>
                        <option value="water">Water</option>
                    </Select>
                    <Input createPost="true" type="submit" value="Share!"/>
                </Form>
            </Container>
        </>
    )
}
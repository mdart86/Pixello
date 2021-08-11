import React, {useState} from 'react'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//image imports: 
import plus from '../images/plus-white.svg'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Textarea } from './styled/Textarea.styled'
import { TextCreatePost } from './styled/Text.styled'
import { SubHeader, Header } from './styled/Header.styled'
import { Select } from './styled/Select.styled'
import { PlusCircle } from './styled/Circle.styled'
import { Label } from './styled/Label.styled'
import { Input } from './styled/Input.styled'
import { PlusIcon } from './styled/Icon.styled'
import { Form } from './styled/Form.styled'
import { ContainerCreatePost } from './styled/Container.styled'

export const CreatePost = ({ history }) => {
    
    const { store } = useGlobalState()
    const { loggedInJWT } = store 
    const { categoryList } = store

    const initialFormData = { 
        username: "",
        image: "",
        caption: "", 
        category: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    
    //used to display file name to user when they upload an image
    const [fileName, setFileName] = useState("No File Chosen")

    //used to notify user if post creation failed
    const [setPostFailed] = useState("")

    //save image data to state, and isolate file name to display to user
    function displayFileInfo(e) {
        setFileName(e.target.files[0].name)
        setFormData({
            ...formData,
            image: e.target.value
        })
    }

    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    function submitFormData(e) {
        e.preventDefault()
        async function fetchData() {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${loggedInJWT}`
                }
            };
            await axios.post("https://pixello.herokuapp.com/posts/new_post", formData, config)
                .then(res => {
                    if (res.data) {
                        setPostFailed(false)
                        //redirect user to the post they just created
                        history.push(`/post/${res.data.id}`)
                    } 
                })
                .catch(err => {
                    setPostFailed(true)
                    console.log(err)
                })
        }
        fetchData()
    }
    
    return (
        <>  
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <ContainerCreatePost>
                <Header createPost="true">Hey there, john_wilson,</Header>
                <SubHeader>We're excited to see what you'll share!</SubHeader>
                <Form onSubmit={submitFormData}>
                    <Label createPost="true" htmlFor="image">
                        <TextCreatePost upload="true">Upload your photo</TextCreatePost>
                        <PlusCircle createPost="true">
                            <PlusIcon createPost="true" src={plus} alt="plus sign"/>
                        </PlusCircle>
                        <TextCreatePost>{fileName}</TextCreatePost>
                    </Label>
                    <input required type="file" id="image" accept=".png, .jpg, .jpeg" hidden onChange={displayFileInfo}/>
                    <Textarea required placeholder="Give it a caption" id="caption" value={formData.caption} onChange={handleFormData}/>
                    <Select required value={formData.category} id="category" onChange={handleFormData}>
                        <option value="" hidden disabled>Categories</option>
                        {categoryList.map((category, index) => <option key={index} value={category}>{category}</option>)}
                    </Select>
                    <Input createPost="true" type="submit" value="Share!"/>
                </Form>
            </ContainerCreatePost>
        </>
    )
}
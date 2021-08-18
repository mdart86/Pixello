import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../utils/context'
import { useParams } from 'react-router'
import axios from 'axios'
//react component imports: 
import { ComingSoon } from './ComingSoon'
//styled component imports: 
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { PinkFeature } from './styled/PinkFeature.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Textarea } from './styled/Textarea.styled'
import { SubHeader, Header } from './styled/Header.styled'
import { Select } from './styled/Select.styled'
import { Input } from './styled/Input.styled'
import { Form } from './styled/Form.styled'
import { ContainerCreatePost } from './styled/Container.styled'
import { TextFormFeedback } from './styled/Text.styled'

export const UpdatePost = ({ history }) => {
    
    const {id} = useParams()

    const { store } = useGlobalState()
    const { loggedInJWT, categoryList } = store 

    //stores post data retreived by the axios request
    const [ postData, setPostData ] = useState("")
    
    //used to notify user if post update failed
    const [updateFailed, setUpdateFailed] = useState("")

    //used to notify the user that their form submission was received
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        async function fetchPostData() {
            await axios.get(`https://pixello.herokuapp.com/posts/${id}`, authorisation)
                .then(res => {
                    if (res.data) {
                        setPostData(res.data)
                    } 
                 })
                .catch(err => console.log(err))
        }
        fetchPostData()
    }, [id, loggedInJWT])

    function handleFormData(e) {
        setPostData({
            ...postData, 
            [e.target.id]: e.target.value
        })
    }

    function submitFormData(e) {
        e.preventDefault()
        setIsLoading(true)
        setUpdateFailed(false)
        async function fetchData() {
            const config = {
                headers: {
                    'Authorization': `Bearer ${loggedInJWT}`
                }
            };
            await axios.put(`https://pixello.herokuapp.com/posts/${id}`, postData, config)
                .then(res => {
                    if (res.data) {
                        setIsLoading(false)
                        //redirect user to their updated post
                        history.push(`/post/${res.data._id}`)
                    } 
                })
                .catch(err => {
                    setIsLoading(false)
                    setUpdateFailed(true)
                    console.log(err)
                })
        }
        fetchData()
    }
    
    return (
        <>  
            {window.innerWidth < 600 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <ContainerCreatePost>
                <Header createPost="true">Update your post</Header>
                <SubHeader>Edit your post's caption or category:</SubHeader>
                <Form onSubmit={submitFormData}>
                    <Textarea required minLength="3" maxLength="100" id="caption" value={postData.caption} onChange={handleFormData}/>
                    <Select required value={postData.category} id="category" onChange={handleFormData}>
                        <option value="" hidden disabled>Categories</option>
                        {categoryList.map((category, index) => <option key={index} value={category}>{category}</option>)}
                    </Select>
                    <Input createPost="true" type="submit" value="Update!"/>
                    {isLoading ? <TextFormFeedback updatepost="true">We're updating your post...</TextFormFeedback> : null}
                    {updateFailed ? <TextFormFeedback updatepost="true">Something went wrong, please try again.</TextFormFeedback> : null}
                </Form>
            </ContainerCreatePost>
            <ComingSoon/>
        </>
    )
}
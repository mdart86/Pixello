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
import { Input } from './styled/Input.styled'
import { Form } from './styled/Form.styled'
import { ContainerCreatePost } from './styled/Container.styled'
import { TextFormFeedback } from './styled/Text.styled'

export const UpdateProfile = ({ history }) => {
    
    const {id} = useParams()

    const { store } = useGlobalState()
    const { loggedInJWT } = store 

    //stores user data retreived by the axios request
    const [ userData, setUserData ] = useState("")
    console.log(userData)
    
    //used to notify user if profile update failed
    const [updateFailed, setUpdateFailed] = useState("")

    //used to notify the user that their form submission was received
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
        };
        async function fetchUserData() {
            await axios.get(`https://pixello.herokuapp.com/users/${id}`, authorisation)
                .then(res => {
                    if (res.data) {
                        setUserData(res.data)
                    } 
                 })
                .catch(err => console.log(err))
        }
        fetchUserData()
    }, [id, loggedInJWT])

    function handleFormData(e) {
        setUserData({
            ...userData, 
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
            await axios.put(`https://pixello.herokuapp.com/users/${id}`, userData, config)
                .then(res => {
                    if (res.data) {
                        setIsLoading(false)
                        //redirect user to their updated profile
                        history.push(`/users/${res.data._id}`)
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
                <Header createPost="true">Update your profile</Header>
                <SubHeader>Edit your bio:</SubHeader>
                <Form onSubmit={submitFormData}>
                    <Textarea required minLength="3" maxLength="100" id="caption" value={userData.bio} onChange={handleFormData}/>
                    <Input createPost="true" type="submit" value="Update!"/>
                    {isLoading ? <TextFormFeedback updatepost="true">We're updating your profile...</TextFormFeedback> : null}
                    {updateFailed ? <TextFormFeedback updatepost="true">Something went wrong, please try again.</TextFormFeedback> : null}
                </Form>
            </ContainerCreatePost>
            <ComingSoon/>
        </>
    )
}
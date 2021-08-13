import React, { useState } from 'react'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//image imports: 
import plus from '../images/plus-white.svg'
//styled component imports:
import { PlusIcon } from './styled/Icon.styled'
import { CircleAddComment } from './styled/Circle.styled'
import { BoxAddComment } from './styled/Box.styled'
import { Form } from './styled/Form.styled'
import { Textarea } from './styled/Textarea.styled'
import { TextFormFeedback } from './styled/Text.styled'
import { Input } from './styled/Input.styled'
import { withRouter } from 'react-router-dom'

const AddComment = ({history, postId}) => {

    const { store } = useGlobalState()
    const { loggedInJWT, loggedInUsername } = store 

    //used to notify user if comment creation failed
    const [creationFailed, setCreationFailed] = useState("")

    //used to notify the user that their form submission was received
    const [isLoading, setIsLoading] = useState(false)

    //used to display the comment form
    const [clicked, setClicked] = useState(false)

    //stores form data 
    const [formData, setFormData] = useState({username: loggedInUsername})

    function handleFormData(e) {
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        setCreationFailed(false)
        async function fetchData() {
            const config = {
                headers: {
                    'Authorization': `Bearer ${loggedInJWT}`
                }
            };
            await axios.post(`https://pixello.herokuapp.com/comments/new_comment/${postId}`, formData, config)
                .then(res => {
                    if (res.data) {
                        setIsLoading(false)
                        history.push('/home')
                    } 
                })
                .catch(err => {
                    setIsLoading(false)
                    setCreationFailed(true)
                    console.log(err)
                })
        }
        fetchData()
    }

    function handleClick() {
        setClicked(true)
    }
    return (
        <>
            <BoxAddComment>
                    { clicked ? 
                        <Form onSubmit={handleSubmit}>
                            <Textarea required minLength="3" maxLength="75" placeholder="Write your comment!" id="comment" value={formData.comment} onChange={handleFormData}/>
                            <Input savecomment="true" type="submit" value="Save!"/>
                        </Form>
                        : 
                        <CircleAddComment>
                            <PlusIcon comment="true" src={plus} alt="plus sign" onClick={handleClick}/>
                        </CircleAddComment>
                    }
                    {isLoading ? <TextFormFeedback savecomment="true">We're uploading your comment...</TextFormFeedback> : null}
                    {creationFailed ? <TextFormFeedback savecomment="true">Something went wrong.</TextFormFeedback> : null}
            </BoxAddComment>
        </>
    )
}

export default withRouter(AddComment)
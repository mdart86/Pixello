import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//react component imports:
import { Post } from './Post' 
//styled component imports:
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Logo } from './styled/Logo.styled'
import { CenteringContainer } from './styled/CenteringContainer.styled'

export const Home = () => {

    //post data retrieved:
    // likes: 0,
    // username: "",
    // caption: "",
    // avatarUrl: "",
    // category: "",
    // id: "", 
    // imageId: ""

    const { store } = useGlobalState()
    const { loggedInUser } = store

    const [postData, setPostData ] = useState("")
    console.log(postData)

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtaWdyYWNlZCIsImVtYWlsIjoiaGVsbG9lbWlseW1pbGxzQGdtYWlsLmNvbSIsImltYWdlSWQiOiJhaWF0NmZnMHpjYWk4aHUzZXVjaSIsImJpbyI6IkhleSwgSSdtIEVtaWx5ISIsIl9pZCI6IjYxMTBkMGQyZjk2ZDg4MDAwNDFkMTU2ZCIsImlhdCI6MTYyODQ5MTk4Nn0.C0rveSGiiSs4pIqw2VPxlNnk4nPLwhN4GcOXxVaHZ1I"
        const authorisation = {
            headers: { Authorization: `Bearer ${token}` }
        };
        async function fetchData() {
            await axios.get("https://pixello.herokuapp.com/posts/", authorisation)
                .then(res => {
                    const postData = res.data
                    setPostData(postData)
                    console.log(postData)
                    
                })
                .catch(err => console.log(err))
        }
        fetchData()
    }, [])


    if (loggedInUser) {
        console.log("Current signed in user is: " + loggedInUser)
    } else {
        console.log("There is no signed in user.")
    }

    return (
        <>
            {window.innerWidth < 450 ? <Logo home="true">Pixello</Logo> : <TopClearance/>}
            {postData ? 
                postData.map((obj) => {
                    <Post post={obj}/>
                }) :
                <CenteringContainer nopostsyet="true">
                    <p>There are no posts yet, <br/>please check back later.</p>
                </CenteringContainer>
            }
            {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
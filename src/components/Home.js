import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../utils/context'
import axios from 'axios'
//image imports: 
import refresh from '../images/refresh.svg'
//react component imports:
import { Post } from './Post' 
//styled component imports:
import { BottomClearance } from './styled/BottomClearance.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Logo } from './styled/Logo.styled'
import { CenteringContainer } from './styled/CenteringContainer.styled'
import { IconHome } from './styled/Icon.styled'
import { IconsContainer } from './styled/IconsContainer.styled'

export const Home = () => {

    const { store } = useGlobalState()
    const { loggedInUser } = store

    const [postData, setPostData ] = useState("")
    
    //used to trigger useEffect when refresh icon is clicked
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtaWdyYWNlZCIsImVtYWlsIjoiaGVsbG9lbWlseW1pbGxzQGdtYWlsLmNvbSIsImltYWdlSWQiOiJhaWF0NmZnMHpjYWk4aHUzZXVjaSIsImJpbyI6IkhleSwgSSdtIEVtaWx5ISIsIl9pZCI6IjYxMTBkMGQyZjk2ZDg4MDAwNDFkMTU2ZCIsImlhdCI6MTYyODQ5MTk4Nn0.C0rveSGiiSs4pIqw2VPxlNnk4nPLwhN4GcOXxVaHZ1I"
        const authorisation = {
            headers: { Authorization: `Bearer ${token}` }
        };
        async function fetchData() {
            await axios.get("https://pixello.herokuapp.com/posts/", authorisation)
                .then(res => {
                    //sort reverses the order so that newer images appear first on the home page
                    const retrievedData = res.data.sort((a,b) => b - a)
                    setPostData(retrievedData)                    
                })
                .catch(err => console.log(err))
        }
        fetchData()
        return () => {
            setPostData("")
        }
    }, [trigger])

    if (loggedInUser) {
        console.log("Current signed in user is: " + loggedInUser)
    } else {
        console.log("There is no signed in user.")
    }

    function handleClick() {
        let num = trigger + 1
        setTrigger(num)
    }

    return (
        <>
            {window.innerWidth < 450 ? <Logo home="true">Pixello</Logo> : <TopClearance/>}
            <IconsContainer refresh="true"><IconHome onClick={handleClick} src={refresh} alt="refresh icon"/></IconsContainer>
            {postData ? 
                postData.map(obj => <Post post={obj} key={obj.id}/>) :
                <CenteringContainer nopostsyet="true">
                    <p><em>Loading photos...</em></p>
                </CenteringContainer>
            }
            {window.innerWidth < 450 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
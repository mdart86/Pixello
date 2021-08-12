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
import { CenteringContainer, IconsContainer } from './styled/Container.styled'
import { IconHome } from './styled/Icon.styled'

export const Home = () => {

    const { store } = useGlobalState()
    const { loggedInJWT } = store

    //stores data retreived by the axios request
    const [postData, setPostData ] = useState("")
    
    //used to trigger useEffect when refresh icon is clicked
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        const authorisation = {
            headers: { Authorization: `Bearer ${loggedInJWT}` }
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
    }, [trigger, loggedInJWT])

    //increment the value to trigger useEffect for refresh purposes
    function handleClick() {
        let num = trigger + 1
        setTrigger(num)
    }

    return (
        <>
            {window.innerWidth < 600 ? <Logo home="true">Pixello</Logo> : <TopClearance/>}
            <IconsContainer refresh="true"><IconHome onClick={handleClick} src={refresh} alt="refresh icon"/></IconsContainer>
            {postData ? 
                postData.map(obj => <Post post={obj} key={obj.id}/>) :
                <CenteringContainer nopostsyet="true">
                    <p><em>Loading photos...</em></p>
                </CenteringContainer>
            }
            {window.innerWidth < 600 ? <BottomClearance/> : <BottomClearance desktop="true"/>}
        </>
    )
}
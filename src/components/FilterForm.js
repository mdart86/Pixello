import React, { useState }  from 'react'
import { useGlobalState } from '../utils/context'
//styled component imports: 
import { PinkFeature } from './styled/PinkFeature.styled'
import { WhiteFeature } from './styled/WhiteFeature.styled'
import { Header } from './styled/Header.styled'
import { CenteringContainer } from './styled/CenteringContainer.styled'
import { TopClearance } from './styled/TopClearance.styled'
import { Form } from './styled/Form.styled'
import { Select } from './styled/Select.styled'
import { Input } from './styled/Input.styled'

export const FilterForm = ({ history }) => {

    const { store } = useGlobalState()
    const { categoryList } = store

    const [formData, setFormData] = useState({category: ""})

    function handleFormData(e) {
        setFormData({category: e.target.value
        })
    }

    function submitFormData(e) {
        e.preventDefault()
        //send info to API
        history.push(`/posts/${formData.category}`)
    }

    return (
        <>
            {window.innerWidth < 450 ? <PinkFeature><WhiteFeature/></PinkFeature> : <TopClearance/>}
            <CenteringContainer filter="true">
                <Header>Filter by category</Header>
                <p>Choose from the options below, and we'll show you the photos in that category.</p>
            </CenteringContainer>
            <Form onSubmit={submitFormData}>
                <Select required value={formData.category} id="category" onChange={handleFormData}>
                    <option value="" hidden disabled>Categories</option>
                    {categoryList.map((category, index) => <option key={index} value={category}>{category}</option>)}
                    
                </Select>
                <Input filter="true" type="submit" value="See the photos!"/>
            </Form>
        </>
    )
}

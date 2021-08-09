import React, { useParams } from 'react'

// this will pretty much be a copy/paste of 
//the home page, just filtering the API call
//by post category

export const Filter = () => {

    const { id } = useParams()

    return (
        <>
            <h1>Filter Posts by Category</h1>
        </>
    )
}

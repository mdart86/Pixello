import React, { createContext, useReducer } from 'react'
import { Reducer, initialState } from './reducer'

export const Context = createContext(initialState)

export const Store = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            { children }
        </Context.Provider>
    )
}
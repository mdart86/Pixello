import React from 'react'
import GlobalStyles from './GlobalStyles'
import { Nav } from './components/Nav'
import { Logout } from './components/Logout'
import { Home } from './components/Home'


export const App = () => {
  return (
    <>
    <GlobalStyles/>
      <Home/>
      <Logout/>
      <Nav/>
    </>
  )
}


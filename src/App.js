import React, { useEffect, useReducer } from 'react'
import { initialState, reducer } from './utils/reducer'
import { Context } from './utils/context'
import GlobalStyles from './components/styled/Global.styled'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import axios from 'axios'
//react component imports: 
import MobileNav from './components/MobileNav'
import DesktopNav from './components/DesktopNav'
import Logout from './components/Logout'
import { AppStart } from './components/AppStart'
import { About } from './components/About';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';
import { Filter } from './components/Filter';
import { ViewPost } from './components/ViewPost';
import { Profile } from './components/Profile';
import { CreatePost } from './components/CreatePost';
import { Messages } from './components/Messages';
import { Message } from './components/Message';
import { Notifications } from './components/Notifications';
import { NotFound } from './components/NotFound';
import { PleaseSignIn } from './components/PleaseSignIn'

export const App = () => {

  const [store, dispatch] = useReducer(reducer, initialState)
  const { loggedInUser } = store

  // api call with axios. can save to state here
  useEffect(() => {
      // axios.get("https://pixello.herokuapp.com")
      //   .then(response => response.json)
      //   .then(data => console.log(data))
      //   .catch(err => console.log(err))
  }, [])


  let excludedUrls = ["/", "/about", "/signup", "/login"]

  return (
    <Context.Provider value={{store, dispatch}}>
      <Router>
        <GlobalStyles/>
        <Switch>
            <Route exact path="/" component={AppStart}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/home" component={ loggedInUser ? Home : PleaseSignIn }/>
            <Route exact path="/filter" component={ loggedInUser ? Filter : PleaseSignIn }/>
            <Route exact path="/post/:id" component={ loggedInUser ? ViewPost : PleaseSignIn }/>
            <Route exact path="/profile/:id" component={ loggedInUser ? Profile : PleaseSignIn }/>
            <Route exact path="/new" component={ loggedInUser ? CreatePost : PleaseSignIn }/>
            <Route exact path="/messages" component={ loggedInUser ? Messages : PleaseSignIn }/>
            <Route exact path="/message/:id" component={ loggedInUser ? Message : PleaseSignIn }/>
            <Route exact path="/notifications" component={ loggedInUser ? Notifications : PleaseSignIn }/>
            <Route component={NotFound}/>
        </Switch>
        {window.innerWidth < 450 ? <Logout excludedUrls={excludedUrls}/> : null}
        {window.innerWidth < 450 ? <MobileNav excludedUrls={excludedUrls}/> : <DesktopNav excludedUrls={excludedUrls}/>}
      </Router>
    </Context.Provider>
  )
}
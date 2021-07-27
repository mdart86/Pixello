import React from 'react'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Logout } from './components/Logout'
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

// "/" is currently routing to the home page
//this is because it's the only content atm
//I will change this later to the AppStart page

export const App = () => {
  return (
    <>
      <Router>
            <GlobalStyles/>
                <Switch>
                    <Route exact path="/">
                        {/* <AppStart/> */}
                        <Home/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/log-in">
                        <LogIn/>
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUp/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/filter">
                        <Filter/>
                    </Route>
                    <Route exact path="/view-post">
                        <ViewPost/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile/>
                    </Route>
                    <Route exact path="/new">
                        <CreatePost/>
                    </Route>
                    <Route exact path="/messages">
                        <Messages/>
                    </Route>
                    <Route exact path="/message">
                        <Message/>
                    </Route>
                    <Route exact path="/notifications">
                        <Notifications/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            <Nav/>
            <Logout/>
      </Router>
    </>
  )
}


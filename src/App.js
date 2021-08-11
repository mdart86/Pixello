import React, { useEffect, useReducer } from 'react'
import { reducer } from './utils/reducer'
import { Context } from './utils/context'
import GlobalStyles from './components/styled/Global.styled'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//react component imports: 
import MobileNav from './components/MobileNav'
import DesktopNav from './components/DesktopNav'
import Logout from './components/Logout'
import { AppStart } from './components/AppStart'
import { About } from './components/About';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';
import { FilterForm } from './components/FilterForm';
import { CategoryFilter } from './components/CategoryFilter'
import { ViewPost } from './components/ViewPost';
import { Profile } from './components/Profile';
import { CreatePost } from './components/CreatePost';
import { Messages } from './components/Messages';
import { Message } from './components/Message';
import { Notifications } from './components/Notifications';
import { NotFound } from './components/NotFound';
// import { PleaseSignIn } from './components/PleaseSignIn'

export const App = () => {

  const initialState = {
    loggedInUsername: "",
    loggedInJWT: "",
    categoryList: []
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  // const { loggedInJWT } = store
  
  //alphabetise and capitalise the categories list and save to global state
  function setCategoryList(list) {
    let alphabetised = list.sort((a, b) => a.localeCompare(b))
    let capitalised = alphabetised.map(category => category[0].toUpperCase() + category.substring(1))
    dispatch({
      type: "setCategoryList",
      data: capitalised
    })
  }

  useEffect(() => {
    let categories = ["food", "outdoor", "indoor", "vehicular", "architecture", "art", "light", "shadow", "film", "candid"]
    setCategoryList(categories)
  }, [])

  //urls that don't render nav or logout
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
            <Route exact path="/home" component={Home}/>
            <Route exact path="/post/:id" component={ViewPost}/>
            <Route exact path="/filter" component={FilterForm}/>
            <Route exact path="/posts/:category" component={CategoryFilter}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route exact path="/new" component={CreatePost}/>
            <Route exact path="/messages" component={Messages}/>
            <Route exact path="/message/:id" component={Message}/>
            <Route exact path="/notifications" component={Notifications}/>
            {/* <Route exact path="/home" component={ loggedInJWT ? Home : PleaseSignIn }/>
            <Route exact path="/post/:id" component={ loggedInJWT ? ViewPost : PleaseSignIn }/>
            <Route exact path="/filter" component={ loggedInJWT ? FilterForm : PleaseSignIn }/>
            <Route exact path="/posts/:category" component={ loggedInJWT ? CategoryFilter : PleaseSignIn }/>
            <Route exact path="/profile/:id" component={ loggedInJWT ? Profile : PleaseSignIn }/>
            <Route exact path="/new" component={ loggedInJWT ? CreatePost : PleaseSignIn }/>
            <Route exact path="/messages" component={ loggedInJWT ? Messages : PleaseSignIn }/>
            <Route exact path="/message/:id" component={ loggedInJWT ? Message : PleaseSignIn }/>
            <Route exact path="/notifications" component={ loggedInJWT ? Notifications : PleaseSignIn }/> */}
            <Route component={NotFound}/>
        </Switch>
        {window.innerWidth < 450 ? <Logout excludedUrls={excludedUrls}/> : null}
        {window.innerWidth < 450 ? <MobileNav excludedUrls={excludedUrls}/> : <DesktopNav excludedUrls={excludedUrls}/>}
      </Router>
    </Context.Provider>
  )
}
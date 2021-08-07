import React from 'react'
import GlobalStyles from './components/styled/Global.styled'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Store } from './utils/context'
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

export const App = () => {

  let excludedUrls = ["/", "/about", "/sign-up", "/log-in"]

  return (
    <Router>
      <Store>
        <GlobalStyles/>
        <Switch>
            <Route exact path="/" component={AppStart}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/log-in" component={LogIn}/>
            <Route exact path="/sign-up" component={SignUp}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/filter" component={Filter}/>
            <Route exact path="/view-post" component={ViewPost}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/new" component={CreatePost}/>
            <Route exact path="/messages" component={Messages}/>
            <Route exact path="/message" component={Message}/>
            <Route exact path="/notifications" component={Notifications}/>
            <Route component={NotFound}/>
        </Switch>
        {window.innerWidth < 450 ? <Logout excludedUrls={excludedUrls}/> : null}
        {window.innerWidth < 450 ? <MobileNav excludedUrls={excludedUrls}/> : <DesktopNav excludedUrls={excludedUrls}/>}
      </Store>
    </Router>
  )
}
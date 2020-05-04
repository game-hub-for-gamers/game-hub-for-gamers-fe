import React from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './Comp/login/Login.js'
import Signup from './Comp/login/Signup.js'
import MyProfile from './Comp/Profile/MyProfile.js'
import Dashboard from './Comp/Dashboard/Dashboard'
import Navbar from './Comp/Nav/Navbar.js';
import Game from './Comp/Dashboard/Game.js'
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Navbar/>
    <Switch>
      <Route exact path='/Home' component={Dashboard}/>
      <Route exact path='/Login' component={Login}/>
      <Route path='/Signup' component={Signup}/>
      <Route path='/Myprofile' component={MyProfile} />
      <Route path='/game' component={Game}/>
    </Switch>
      </div>
  );
}
}

export default App;

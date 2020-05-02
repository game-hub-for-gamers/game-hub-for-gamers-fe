import React from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './Comp/login/Login.js'

import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
    <Switch>
      <Route exact path='/log' component={Login}/>

    </Switch>
      </div>
  );
}
}

export default App;

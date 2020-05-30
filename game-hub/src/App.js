import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Comp/login/Login.js";
import Signup from "./Comp/login/Signup.js";
import MyProfile from "./Comp/Profile/MyProfile.js";
import OtherUserP from "./Comp/Profile/OtherUserP.js";
import Dashboard from "./Comp/Dashboard/Dashboard";
import Navbar from "./Comp/Nav/Navbar.js";
import Game from "./Comp/Dashboard/Game.js";
import "./App.css";
import PrivateRoute from "./Comp/middleware/PrivateRoute.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/user" component={OtherUserP} />
          <Route path="/game/:id" component={Game} />
          <Route path="/signup" component={Signup} />

          {/* users perticeted route */}
          <PrivateRoute path="/Myprofile" component={MyProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;

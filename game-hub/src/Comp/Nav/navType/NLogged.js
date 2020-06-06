import React from 'react'
// navbar logged in 
import { NavLink } from "react-router-dom";
import {
  // Avatar,
  Pane,
  Text,
  // IconButton,
  Button,
  Tab,
} from "evergreen-ui";

const NLogged = (props) => {
  function logout (){
    localStorage.setItem("token","")
    console.log(localStorage.token)
    window.location.reload(false);
  }
  return(
    <>
      <Pane display="flex" border="default" justifyContent="space-between">
        <Text>game-hub</Text>

        <Pane></Pane>
        <Tab>
          <NavLink to="/myprofile">profile</NavLink>
        </Tab>
        <Tab>
          <NavLink to="/">dashboard</NavLink>
        </Tab>
        <Tab>
          <NavLink to="/game">game</NavLink>
        </Tab>
        <Pane display="flex">
          <Tab>
            <Button onClick={logout}>Logout</Button>
          </Tab>

        </Pane>
      </Pane>
    </>)
}

export default NLogged;
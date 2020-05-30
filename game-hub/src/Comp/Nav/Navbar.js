import React from "react";
import { NavLink } from "react-router-dom";
import {
  // Avatar,
  Pane,
  Text,
  // IconButton,
  // Button,
  Tab,
} from "evergreen-ui";
const Navbar = () => {
  return (
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
            <NavLink to="/signup">Signup</NavLink>
          </Tab>

        </Pane>
      </Pane>
    </>
  );
};

export default Navbar;

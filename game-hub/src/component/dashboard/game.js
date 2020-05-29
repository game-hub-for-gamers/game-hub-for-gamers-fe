import React from "react";
// import {connect} from 'react-redux'
import { Pane, Text, Heading } from "./node_modules/evergreen-ui";

const Game = (props) => {
  return (
    <>
      {console.log(props)}
      <Pane
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        background="#D4EEE2"
        margin={30}
        style={{ borderRadius: "10px" }}
      >
        <Heading size={100} marginTop="default">
          {" "}
          {props.game}
        </Heading>
        <Pane
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <Pane
            width="200px"
            display="flex"
            padding={16}
            background="tint2"
            borderRadius={3}
            justifyContent="space-around"
            margin={10}
          >
            <Text>jap</Text>
            <Text color="success"> 0/4</Text>
          </Pane>
        </Pane>
      </Pane>
    </>
  );
};

export default Game;

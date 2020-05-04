import React from 'react';

import {Card, Pane, Text,Pill, Heading,Badge} from 'evergreen-ui'

const Game = ()=> {
  return (<>
  <Pane>
    <Heading size={100} marginTop="default"> Teams</Heading>
    <Pane width="200px" display="flex" padding={16} background="tint2" borderRadius={3}
    justifyContent="space-around">
<Text>jap</Text> 
<Text color="success" > 0/4</Text>
    </Pane>
    <Pane width="200px" display="flex" padding={16} background="tint2" borderRadius={3}
    justifyContent="space-around">
<Text>jim</Text> 
<Text color="success" > 0/4</Text>
    </Pane>
    <Pane width="200px" display="flex" padding={16} background="tint2" borderRadius={3}
    justifyContent="space-around">
<Text>jack</Text> 
<Text color="success" > 0/4</Text>
    </Pane>
    <Pane width="200px" display="flex" padding={16} background="tint2" borderRadius={3}
    justifyContent="space-around">
<Text>name</Text> 
<Text color="success" > 0/4</Text>
    </Pane>
    <Pane width="200px" display="flex" padding={16} background="tint2" borderRadius={3}
    justifyContent="space-around">
<Text>yap</Text> 
<Text color="success" > 0/4</Text>
    </Pane>
    <Pane width="200px" display="flex" padding={16} background="tint2" borderRadius={3}
    justifyContent="space-around">
<Text>map</Text> 
<Text color="success" > 0/4</Text>
    </Pane>
    <Pane width="200px" display="flex" padding={16} background="tint2" borderRadius={3}
    justifyContent="space-around">
<Text>teams</Text> 
<Text color="success" > 0/4</Text>
    </Pane>
  </Pane>
  </>)
}

export default Game;
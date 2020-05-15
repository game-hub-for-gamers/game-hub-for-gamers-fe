import React from 'react';

import {Card, Pane, Text,Pill,Popover,Button} from 'evergreen-ui'



const Dashboard = (prop)=> {
  return (
<> 

  <Pane
    display="flex"
    flexDirection="row"
    >
      <Pane
      borderRight='default'
      display="flex"
      flexDirection="column"
      width={300}>

        <Popover
          content={
          <Pane
            width={240}
            height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Button>join</Button>
          </Pane>    
          }
          position={prop.RIGHT}
          >
          <Button>cod squad
            <Pill display="inline-flex" margin={8}>1/6</Pill></Button>
          </Popover>

        <Text>
          cod squad
          <Pill display="inline-flex" margin={8}>1/4</Pill>
        </Text>
        <Text>
          rainbow squad
          <Pill display="inline-flex" margin={8}>1/5</Pill>
        </Text>
        <Text>
          fortnite dous
          <Pill display="inline-flex" margin={8}>1/2</Pill>
        </Text>
      </Pane>
    
    <Pane
    display="flex"
    flexWrap="wrap"
    justifyContent='center'>
      <Card
      margin={10}
      height={120}
      width={240}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="default">
        cod
        <Pill display="inline-flex" margin={8} color="red" isSolid>200</Pill>
      </Card>
      <Card
      margin={10}
      height={120}
      width={240}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="default">
        amoung us
        <Pill display="inline-flex" margin={8} color="red" isSolid>200</Pill>
        </Card>
        <Card
        margin={10}
      height={120}
      width={240}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="default">
        rainbow six siege
        <Pill display="inline-flex" margin={8} color="red" isSolid>200</Pill>
        </Card>
        <Card
        margin={10}
      height={120}
      width={240}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="default">
        fortnite
        <Pill display="inline-flex" margin={8} color="red" isSolid>200</Pill>
        </Card>
        <Card
        margin={10}
      height={120}
      width={240}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="default">
        gta v
        <Pill display="inline-flex" margin={8} color="red" isSolid>200</Pill>
        </Card>
        <Card
        margin={10}
      height={120}
      width={240}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      border="default">
        fighting game
        <Pill display="inline-flex" margin={8} color="red" isSolid>200</Pill>
        </Card>
    </Pane>
  </Pane>
      </>
  )
}

export default Dashboard;
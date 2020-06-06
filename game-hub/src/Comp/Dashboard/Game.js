import React from 'react';
// import {connect} from 'react-redux'
import {Pane, Text,
    Heading, Icon,

} from 'evergreen-ui'

import MakeModal from './MakeModal'

const Game = props => {
  return (
  <>
  this will also have a feed section
    {console.log(props)}
    <Pane display='flex' 
    flexWrap="wrap"
    flexDirection='column'
    background="#D4EEE2" 
    margin={30}
    style={{'borderRadius': '10px'}}>
    <Heading size={100} marginTop="default"> {props.game}</Heading>
        <Pane 
            display='flex'
            flexWrap="wrap"
            flexDirection='row'
            justifyContent='space-evenly'>

            <Pane 
                width="200px" 
                display="flex" 
                padding={16} 
                background="tint2" 
                borderRadius={3}
                justifyContent="space-around"
                margin={10}>
                <Text>username from user</Text> 
                <Text color="success" > 0/4</Text>
            </Pane>
            <Pane width="200px" 
                display="flex" 
                padding={16} 
                background="tint2" 
                borderRadius={3}
                justifyContent="space-around"
                margin={10}>look for a team mates 
                <Icon icon="add" paddingTop={2} size={20}/>
            </Pane>
            
            <MakeModal/>
            {/* <MakeModal initialState={{ isShown: false }}>
              {({ state, setState }) => (
                <Pane paddingY='40vh'>
                  <Dialog
                    isShown={state.isShown}
                    onCloseComplete={() => setState({ isShown: false })}
                    preventBodyScrolling
                  >
                    Scroll-locked body
                  </Dialog>

                  <Button onClick={() => setState({ isShown: true })}>Show Dialog</Button>
                </Pane>
              )}
            </MakeModal> */}

        </Pane>
        
        
    </Pane>
    
  </>)
}

export default Game;
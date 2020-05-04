import React from 'react'
import {NavLink} from 'react-router-dom'
import {Avatar,Pane,Text,IconButton,Button,Tab} from 'evergreen-ui'
const Navbar = ()=> {
  return(<>
  <Pane display='flex'
  border='default'
  justifyContent='space-between'>
    <Text>
      game-hub
    </Text>

    <Pane>

    </Pane>
    <Tab><NavLink to='/myprofile'>profile</NavLink></Tab>
    <Tab><NavLink to='/home'>dashboard</NavLink></Tab>
    <Tab><NavLink to='/game'>game</NavLink></Tab>
    <Pane
    display='flex'
    >
      <Button height={20} appearance="minimal" marginRight={16}>
        Logout
      </Button>
      <IconButton appearance="minimal" icon="notifications" iconSize={18} />
      <Avatar isSolid color="green" name="Jeroen Ransijn" size={40} />
    </Pane>
  </Pane>
  </>)
}

export default Navbar;
import React from 'react'
import {Avatar,Pane,
  Text,TickCircleIcon,
  Card,Heading,
  Badge,Icon,
  Dialog,Button,
  } from 'evergreen-ui'
import addingGames from './addingGames';
const MyProfile = ( ) => {
  return(<Pane display='flex' flexDirection='column'>
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      background="#F9F9FB"
      margin={30}
      style={{'borderRadius': '10px'}}
      padding={15}
    >
      <Avatar name="Jeroen Ransijn" size={300} />
      <Pane display="flex" flexDirection="column" alignItems='center'>
        <Text margin="10px" size={600} >Jeroen Ransijn <TickCircleIcon color="success" marginRight={16} /></Text>
        <Card padding={16} background="#66788A">
          <Heading is="h3" color='white' paddingBottom={5}> Platform </Heading>
          <Badge color="neutral" isSolid marginRight={8}>Steam</Badge>
          <Badge color="green" isSolid marginRight={8}>Xbox</Badge>
          <Badge color="blue" isSolid marginRight={8}>Psn</Badge>
          <Badge color="red" isSolid marginRight={8}>Switch</Badge>
          <Badge color="purple" isSolid marginRight={8}>Epic</Badge>
        </Card>
      </Pane>
    </Pane>
    <Pane display='flex' 
      background="#D4EEE2" 
      margin={30}
      style={{'borderRadius': '10px'}}
      justifyContent='space-evenly'
      flexWrap='wrap'
    >
      <Card background="#47B881" padding={16} margin={10}>
        list of games here
      </Card>

      <addingGames initialState={{ isShown: false }}>
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
    </addingGames>

      <Card background="#F9F9FB" padding={16} margin={10} alignItems='center'>
        <Icon icon="add" paddingTop={2} size={20}/>
      </Card>
    </Pane>
  </Pane>)
}
export default MyProfile;
import React from 'react'
import {Avatar,Pane,
  Text,TickCircleIcon,
  Card,Heading,
  Badge} from 'evergreen-ui'
const MyProfile = ( ) => {
  return(<>
  <Pane
  display="flex"
  alignItems="center"
  justifyContent="space-evenly"
  >

  <Avatar name="Jeroen Ransijn" size={300} />

  <Text margin="10px" size={600}>Jeroen Ransijn <TickCircleIcon color="success" marginRight={16} /></Text>
  <Card padding={16} background="tint2" >
    <Heading is="h3"> Platform </Heading>
  <Badge color="neutral" isSolid marginRight={8}>Steam</Badge>
  <Badge color="green" isSolid marginRight={8}>Xbox</Badge>
  <Badge color="blue" isSolid marginRight={8}>Psn</Badge>
  <Badge color="red" isSolid marginRight={8}>Switch</Badge>
  <Badge color="purple" isSolid marginRight={8}>Epic</Badge>
  </Card>
  games
  </Pane>
  </>)
}
export default MyProfile;
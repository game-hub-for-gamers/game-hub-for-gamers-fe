import React from 'react';
import {
  Card,
  Pane, 
  Text,
  Pill,
  Popover,
  Button,
  Icon,

} from 'evergreen-ui'
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'
import {gameA} from '../../redux/Actions/dashboardGames.js'


class Dashboard extends React.Component{
  constructor({props}){
    super(props)
    this.state ={
    }
  }

  componentDidMount(){
    // add/mounts actions
    this.props.gameA()
  }

  render(){
    return (
      <> 
      {console.log(this.props.data)}
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
          position={this.props.RIGHT}
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

      {this.props.data.map(e=>
        <NavLink to={`/game/${e.game}`}>
          <Card
            margin={10}
            height={120}
            width={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            border="default"
            key={e.id}>
              {e.game} 
              <Pill display="inline-flex" margin={8} color="red" isSolid>200</Pill>
            </Card>
          </NavLink>
      )}

        <Card
          margin={10}
          height={120}
          width={240}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          border="default">
            Suggest A Game
          <Icon icon="add" paddingTop={2} size={20}/>
        </Card>
      </Pane>



    </Pane>
    </>
  )
}
}

const mapStateToProps = state => {
  return {
    // state from reduc and object from the game reducer
    data:state.Allgame.games
  }
}
export default connect(mapStateToProps,{gameA})(Dashboard)
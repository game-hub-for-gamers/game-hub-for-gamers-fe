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
// import {connect} from 'react-redux'
// import {gameA} from '../../redux/Actions/dashboardGames.js'
import axios from 'axios';
// import { compose } from 'redux';
// import Game from './Game';

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state ={data:[]}
  }
  getting = () => {
    axios
    .get('http://localhost:3333/game/g')
    .then(res => {
      this.setState({data:res.data})
      console.log("state",this.state)
    })
    .catch(err => {
      console.log(err.data)
    })
  }
  componentDidMount(){
    this.getting()
  }
  render(){
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

      {this.state.data.map(e=> 
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
export default Dashboard;

// const mapStateToProps = state => {
  //   return {
    //     data:state.Alldash
    //   }
    // }
    // export default connect(mapStateToProps,{gameA})(Dashboard)
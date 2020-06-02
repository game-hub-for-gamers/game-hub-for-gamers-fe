import React from 'react';
import {connect} from 'react-redux';
import {TextInput,Button} from 'evergreen-ui'
import {RegisterAction} from '../../redux/Actions/RegisterAction'

class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      username:'',
      email:'',
      password:''
    }
  }
   
  handleChange = e => {
    e.preventDefault()
    console.log(e.target.value,e.target.name)
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    })
  }
  Submit =(e) => {
    e.preventDefault()
    console.log(this.props.data)
    this.props.RegisterAction(this.state)
    // this.props.history.push('/')
  }
  render(){
    return (<form onSubmit={this.Submit}>
      <TextInput
        name="username"
        placeholder="username"
        value ={this.state.username}
        onChange={this.handleChange}
      />
      <TextInput 
        name="email"
        placeholder="youremail@email.com"
        value ={this.state.email}
        onChange={this.handleChange}
      />
      <TextInput 
        name="password"
        placeholder="password"
        value ={this.state.password}
        onChange={this.handleChange}
      />
      <Button height={30} appearance="primary" marginRight={16}>
        Signup
      </Button>
      </form>)
  }
}

const mapStateToProps =(state)=> {
  return{
    data:state
  }
}

export default connect(mapStateToProps,{RegisterAction})(Signup);
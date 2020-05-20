import React from 'react';
// import {connect} from 'react-redux';
import {TextInput,Button} from 'evergreen-ui'
// import {postProfile} from '../../redux/Actions/profileA'
import axios from 'axios'
class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      username:'',
      email:'',
      password:''
    }
  }
    componentDidMount(){}
   
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
    axios
    .post('http://localhost:3333/api/u/u',this.state)
    .then(res => {})
    .catch(err => {})
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
export default Signup;
import React from 'react';
import {TextInput,Button,} from 'evergreen-ui'
// import {axiosWithAuth} from 'axios';
const Login = (props) => {
  const state={
    username:'',
    passcode:''
  }
  // handleChange = (e) => {
  //   e.PreventDefault()
  //   .setState({...stathiste,
  //   [this.target.name]:this.target.value})
  // }
  
  return (<>
    <TextInput
      name="username"
      value={this.state.username}
      placeholdwer="username"

      onChange={this.handleChange}
    />
    {/* <TextInput 
    name="password"
    // value={creds.password}
    onChange={this.handleChange}
    placeholder="password"
    /> */}

    <Button height={30} appearance="primary" marginRight={16}>
      Login
    </Button>
    </>)
}


export default Login;

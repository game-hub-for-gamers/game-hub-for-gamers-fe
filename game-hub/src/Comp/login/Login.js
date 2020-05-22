import React from 'react';
import {TextInput,Button,} from 'evergreen-ui'
// import {axiosWithAuth} from 'axios';
const Login = () => {

  return (<>
    <TextInput
      name="username"
      // value={creds.username}
      placeholder="username"
      onChange={this.handleChange}
    />
    <TextInput 
    name="password"
    // value={creds.password}
    onChange={this.handleChange}
    placeholder="password"
    />

    <Button height={30} appearance="primary" marginRight={16}>
      Login
    </Button>
    </>)
}


export default Login;

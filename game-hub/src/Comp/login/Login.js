import React from 'react';
import {TextInput,Button} from 'evergreen-ui'
const Login = () => {
  // state={
  //   value:''
  // }
  return (<>
    <TextInput
      name="username"
      placeholder="username"
    />
    <TextInput 
    name="password"
    placeholder="password"
    />
    <Button height={30} appearance="primary" marginRight={16}>
      Login
    </Button>
    </>)
}

export default Login;
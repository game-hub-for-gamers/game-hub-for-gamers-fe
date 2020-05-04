import React from 'react';
import {TextInput,Button} from 'evergreen-ui'
const Signup = () => {
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
      Signup
    </Button>
    </>)
}

export default Signup;
// ReactDOM.render(<Signup />, mountNode);
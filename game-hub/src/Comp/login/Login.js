import React from 'react';
import {TextInput,Button,} from 'evergreen-ui'
// import {axiosWithAuth} from 'axios';
const Login = () => {
//  const [credentials, setCredentials] = useState({});

//    credentials ={
//     username:'',
//     password:'',
//   }

  // const log = (e) => {
  //   e.preventDefault()
  //   axiosWithAuth()
  //   .post('url',credentials)
  //   .then (res => {
  //     localStorage.setItem('token',res.data.token)
  //     this.props.history.push('/');
  //   })
  // }

  // const handleChange = event => {
  //   setCredentials:{
  //     ...credentials,
  //     [event.target.name]: event.target.value,
  //   }
  // }

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


  
  {/* {({ state, setState }) => (
    <Pane>
      <Dialog
        isShown={state.isShown}
        title="Loading confirmation"
        onCloseComplete={() => setState({ isShown: false, isLoading: false })}
        isConfirmLoading={state.isLoading}
        onConfirm={() => setState({ isLoading: true })}
        confirmLabel={state.isLoading ? 'Loading...' : 'Confirm Loading'}
      >
        Dialog content
      </Dialog>

      <Button onClick={() => setState({ isShown: true })}>Show Dialog</Button>
    </Pane>
  )} */}




    <Button height={30} appearance="primary" marginRight={16}>
      Login
    </Button>
    </>)
}


export default Login;

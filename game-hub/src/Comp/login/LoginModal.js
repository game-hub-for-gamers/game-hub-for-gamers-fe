import React from 'react'

import {
  Pane, Dialog,
  Button,TextInput,
  Alert,
} from 'evergreen-ui'
import { loginAction } from "../../redux/Actions/loginAction.js";
import { connect } from "react-redux";
import Component from '@reach/component-component'

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

  }
      componentDidMount(){
        this.props.loginAction()
      }
  handleSubmit = (event) => {
    // event.preventDefault();
    this.props.loginAction(this.state)
  };
  componentDidUpdate = () => {
    console.log(this.props.status.status)
    if(this.props.status.status === 200){
      // fires when passcode is right
      window.location.reload(false);
    }else{
      return   <Alert
      intent="danger"
      title="We weren’t able to save your changes"
    />
    }
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render(){

    return (<> 
      {console.log(this.props.status)}
    <Component initialState={{ isShown: false }}>
      
      {({ state, setState }) => (

        <Pane paddingY='4px'>
          <Dialog
            title="Login"
            isShown={state.isShown}
            onCloseComplete={() => setState({ isShown: false })}
            preventBodyScrolling
            hasCancel={false}
            confirmLabel="login"
            onConfirm={this.handleSubmit}
            // 


            // checks to see if you are logged in

            >
              <form >
              <TextInput
                type="text"
                name="username"
                value={this.state.username} // referring to our object (state) through "this"
                placeholder="username"
                onChange={this.handleChange}
              />
              <TextInput
                type="password"
                name="password"
                value={this.state.password} // referring to our object (state) through "this"
                onChange={this.handleChange}
                placeholder="password"
              />

              {/* <Button height={30} appearance="primary" marginRight={16}
              onClick={this.handleSubmit}>
                Login
              </Button> */}
            </form>

          </Dialog>
              {/* this button is to open the modal */}
          <Button onClick={() => setState({ isShown: true })}>login</Button>
        </Pane>
      )}
    </Component>
      </>)
}
}

const mapStateToProps = (state) => {
  return { 
    login:  state.login.login,
    status: state.login,
    fetching: state.login.isFetching
   };
};

export default connect(mapStateToProps, { loginAction })(LoginModal); // connecting our mapStateToProps function and our actions
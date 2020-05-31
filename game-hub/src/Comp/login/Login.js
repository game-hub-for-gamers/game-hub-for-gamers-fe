import React from "react";
import { TextInput, Button } from "evergreen-ui";
import { loginAction } from "../../redux/Actions/loginAction.js";
import { connect } from "react-redux";
// import { axiosWithAuth } from "../middleware/axiosWithAuth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // login: [],
      usename: "",
      password: "",
    };
  }

  // axios with auth here

  handleSubmit = (event) => {
    event.preventDefault();

    loginAction(this.props.state);

    // axiosWithAuth()
    //   .post("http://localhost:3333/api/user/login", this.state)
    //   .then((res) => {
    //     console.log("user login", res);
    //     localStorage.setItem("token", res.data.token);
    //     this.setState(res.data);
    //     this.props.history.push("/"); // when user has a set token append into local storage they will be directed to the dashboard
    //   });
  };

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
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

          <Button height={30} appearance="primary" marginRight={16}>
            Login
          </Button>
        </form>
      </>
    );
  }
}

// mapStateToProps funciotn

const mapStateToProps = (state) => {
  return { login: state.login.login };
};

export default connect(mapStateToProps, { loginAction })(Login); // connecting our mapStateToProps function and our actions

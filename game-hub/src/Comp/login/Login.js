import React from "react";
import { TextInput, Button } from "evergreen-ui";
import { axiosWithAuth } from "../middleware/axiosWithAuth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  // axios with auth here

  handleSubmit = (event) => {
    event.PreventDefault();
    axiosWithAuth()
      .post("http://localhost:3333/api/user/login", this.state)
      .then((res) => {
        console.log("user login", res);
        localStorage.setItem("token", res.data.token);
        this.setState(res.data);
        this.props.history.push("/"); // when user has a set token append into local storage they will be directed to the dashboard
      });
  };

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <form>
          <TextInput
            type="text"
            name="text"
            value={this.username} // referring to our object (state) through "this"
            placeholdwer="username"
            onChange={this.handleChange}
          />
          <TextInput
            type="pssword"
            name="password"
            value={this.password} // referring to our object (state) through "this"
            onChange={this.handleChange}
            placeholder="password"
          />

          <Button
            onSubmit={this.handleSubmit}
            height={30}
            appearance="primary"
            marginRight={16}
          >
            Login
          </Button>
        </form>
      </>
    );
  }
}

export default Login;

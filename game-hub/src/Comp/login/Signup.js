import React from "react";
import { connect } from "react-redux";
import { TextInput, Button } from "evergreen-ui";
import { RegisterAction } from "../../redux/Actions/RegisterAction";
// Form validation YUP
import * as Yup from "yup";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value, e.target.name);
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  Submit = (e) => {
    e.preventDefault();
    console.log(this.props.data);
    this.props.RegisterAction(this.state);
    // this.props.history.push('/')
  };

  // Yup Form Validation
  formSchema = Yup.object().shape({
    // tell Yup what shape the data is supposed to take
    username: Yup.string()
      .username("Must be a vaild username")
      .required("Username is required"),
    email: Yup.string()
      .email("Must be a vaild email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Passwords must be at least 6 characters long.")
      .required("Password is required"),
  });

  render() {
    return (
      <form onSubmit={this.Submit}>
        <TextInput
          name="username"
          type="text" // type - form validation
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <TextInput
          name="email"
          type="text" // type - form validation
          placeholder="youremail@email.com"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <TextInput
          name="password"
          type="password" // type - form validation
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Button height={30} appearance="primary" marginRight={16}>
          Signup
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, { RegisterAction })(Signup);

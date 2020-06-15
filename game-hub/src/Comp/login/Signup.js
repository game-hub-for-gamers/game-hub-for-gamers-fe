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
      raw:{
        email:'',
        password:'',
      },
      errors:{
        email:null,
        password:null,
      },
      val:null
    };

    
  }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value, e.target.name);
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  Submit = (e) => {
    e.preventDefault();
    // console.log(this.props.data);
    this.props.RegisterAction(this.state);
    // this.props.history.push('/')
  };

  //  *** Yup Form Validaiton ***

  // Yup Form Validation Schema
  formSchema = 
    Yup.object().shape({
      // username: Yup.string()
      //   .username("Must be a vaild username")
      //   .required("Username is required"),
      email: Yup.string()
        .email("Must be a vaild email")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Passwords must be at least 6 characters long.")
        .required("Password is required"),
    });

    
    inputChange = e => {
      /* e.persist allows us to use the synthetic event in an async manner.
      We need to be able to use it after the form validation */
      e.persist();

      this.setState(otherState=>({
        raw:{
        ...otherState.raw,
        [e.target.name]: e.target.value
        }
      }));


      Yup
      .reach(this.formSchema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // console.log(e.target.value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        console.log(valid)
        this.setState((other)=>({
          errors:{
            ...other.errors,
          [e.target.name]: ""}
        }));
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
      .catch(err => {
        console.log(err)
        this.setState({
          ...this.errors,
          [e.target.name]: err.errors[0]
        });
      });
      
      // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
      // this.setState({
      //   ...this.state,
      //   [e.target.name]: e.target.value
      // });
    };
    
    buttonEnable = (pas) => {
     console.log(pas)
    }
    // hadnling our side effects when validation is true
    componentDidMount() {
      // passes our state into the entire schema. Makes sure data is valid before user submits
      this.formSchema.isValid(this.state).then((valid) => {
        // this.setState({val:valid})
        console.log("param from side effect", valid);
        this.buttonEnable(!valid);
        // state from our reducer
      });
    }
    
    render() {
      // {
      console.log("This is formState" ,this.state.val);
    // }
    return (
      <form onSubmit={this.Submit}>
        {/* <TextInput
          name="username"
          type="text" // type - form validation
          placeholder="username"
          value={this.state.username}
          onChange={this.inputChange}
        /> */}
        <TextInput
          name="email"
          type="text" // type - form validation
          placeholder="youremail@email.com"
          value={this.state.raw.email}
          onChange={this.inputChange}
        />
        <TextInput
          name="password"
          type="password" // type - form validation
          placeholder="password"
          value={this.state.raw.password}
          onChange={this.inputChange}
        />
        <Button height={30} appearance="primary" marginRight={16}
          disabled = {this.state.val}
        >
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

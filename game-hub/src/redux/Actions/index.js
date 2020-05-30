import axios from "axios";

export const GETLOGIN = "GETLOGIN";
export const SUCLOGIN = "SUCLOGIN";
export const FAILLOGIN = "FAILLOGIN";

export const POSTLOGIN = "POSTLOGIN";

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem('token');

//   return axios.create({
//     headers: {
//       Authorization : token,
//     },
//   })
// }
// Authorization: `Bearer ${token}`

// import {axiosWithAuth} from '../../path/to/axiosAuth.js'
import { PropertiesIcon } from "evergreen-ui";

export default login = (data) => {
  return (dispatch) => {
    axios.post("endpoint", creds).then((res) => {
      localStorage.setItem("token", res.data.token);
      PropertiesIcon.history.push("/dashboard");
    });
  };
};

import axios from 'axios'
export const REGISTERGET = "REGISTERGET"; // fecting data
export const REGISTERDONE = "REGISTERDONE"; // have the data
export const REGISTERFAIL = "REGISTERFAIL"

export const RegisterAction = (input) => (dispatch) => {
  dispatch({ type: REGISTERGET });
  axios
    .post("http://localhost:3333/api/user/register", input)
    .then(res => dispatch({type: REGISTERDONE,payload: res.data}))
    .catch(error => dispatch({type: REGISTERFAIL,error: error,}))
};



import axios from 'axios'
export const UPADTESTART = "UPADTESTART"; // fecting data
export const UPDATEDONE = "UPDATEDONE"; // have the data
export const UPDATEFAIL = "UPDATEFAIL"

export const profileupdate = (input) => (dispatch) => {
  dispatch({ type: UPADTESTART });
  axios
    .put("http://localhost:3333/api/user/register", input)
    .then(res => dispatch({type: UPDATEDONE,payload: res.data}))
    .catch(error => dispatch({type: UPDATEFAIL,error: error,}))
};


// export const profiledelete = (input) => (dispatch) => {
//   dispatch({ type: UPADTESTART });
//   axios
//     .post("http://localhost:3333/api/user/register", input)
//     .then(res => dispatch({type: UPDATEDONE,payload: res.data}))
//     .catch(error => dispatch({type: UPDATEFAIL,error: error,}))
// };

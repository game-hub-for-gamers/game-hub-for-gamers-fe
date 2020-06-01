import { axiosWithAuth } from "../../Comp/middleware/axiosWithAuth.js";

// actions type variable that indicates the process of the callback function
export const START = "START"; // fecting data
export const FETCHED = "FETCHED"; // have the data
export const FAILURE = "FAILURE"; // faild to post data

export const loginAction = (state) => (dispatch) => {
  // decalring that the process has started
  dispatch({ type: START });
  axiosWithAuth()
    .post("http://localhost:3333/api/user/login", state)
    .then((res) => {
      console.log(res,"then proccess");
      localStorage.setItem("token", res.data.token)
      dispatch({
        type: FETCHED,
        payload: res.data, // assinging our data to the payload
      });
    })
    .catch((error) => {
      dispatch({
        // calling our callback function
        type: FAILURE, // type of callbcak failure
        error: error,
      });
    });
};

import { axiosWithAuth } from "../../Comp/middleware/axiosWithAuth.js";

// actions type
export const START = "START";
export const FAILURE = "FAILURE";

export const loginAction = () => (dispatch) => {
  //   dispatch({ type: START });
  //   axiosWithAuth().post("http://localhost:3333/api/user/login").then();
};

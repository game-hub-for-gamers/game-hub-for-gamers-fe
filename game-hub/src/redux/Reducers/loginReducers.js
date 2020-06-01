import { START, FETCHED, FAILURE } from "../Actions/loginAction.js";

// decalring the initState (kinda like a place holder for our state)
const initState = {
  login: [],
  isFetching: false,
  error: "",
};

export const loginReducer = (state = initState, action) => {
  //
  switch (action.type) {
    case START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHED:
      return {
        ...state,
        login: action.payload, // getting our data from our actions
        isFetching: false,
      };
    case FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

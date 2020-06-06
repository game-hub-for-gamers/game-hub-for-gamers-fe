import { START, FETCHED, FAILURE } from "../Actions/loginAction.js";

// decalring the initState (kinda like a place holder for our state)
const initState = {
  status:null,
  login: [],
  isFetching: false,
  error: null,
};

export const loginReducer = (state = initState, action) => {
  //
  switch (action.type) {
    case START:
      return {
        ...state,
        isFetching: true,
        status:action.status
      };
    case FETCHED:
      return {
        ...state,
        login: action.payload, // getting our data from our actions
        isFetching: false,
        status:action.status
      };
    case FAILURE:
      return {
        ...state,
        error: action.error,
        status:action.status
      };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { gameR } from "./dashboadGameR";
import { loginReducer } from "./loginReducers.js";
import { RegisterReducer } from "./RegisterReducer";

export const rootReducer = combineReducers({
  games: gameR,
  login: loginReducer,
  register: RegisterReducer,
});

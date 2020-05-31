import { combineReducers } from "redux";
import { gameR } from "./dashboadGameR";
import { loginReducer } from "./loginReducers.js";

export const rootReducer = combineReducers({
  games: gameR,
  login: loginReducer,
});

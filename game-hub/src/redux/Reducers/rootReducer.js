import {combineReducers} from 'redux'
import {gameR} from './dashboadGameR'

export const  rootReducer = combineReducers ({
  Alldash: gameR,
})
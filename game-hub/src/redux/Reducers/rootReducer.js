import {combineReducers} from 'redux'
import ProfileR from './ProfileR'

export const  rootReducer = combineReducers ({
  Profile: ProfileR,
})
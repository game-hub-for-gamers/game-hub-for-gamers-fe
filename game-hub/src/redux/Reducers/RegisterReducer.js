import {
        REGISTERGET,
        REGISTERDONE,
        REGISTERFAIL
        } from '../Actions/RegisterAction'

const initstate ={
  isFetching:false,
  data:[],
  error:'',
}

export const RegisterReducer = (state = initstate, action) => {
  switch(action.type){
    case REGISTERGET:
      return{
        ...state,
        isFetching:true,
      }
    case REGISTERDONE:
      return{
        ...state,
        isFetching:false,
        data:action.payload
      }
      case REGISTERFAIL:
        return{
          ...state,
          error:action.error
        }
    default:
      return state
  }
}
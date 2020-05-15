import {
  PROFILESTARTP,
  PROFILESUCCP,
  PROFILEFAILP
} from '../Actions/profileA';

const inti = {
  Profile:[],
  error:'',
  isFetching: false,
}

const  ProfileR  = (state = inti,action) => {
  console.log('reducer')
  switch(action.type){
    case PROFILESTARTP:
      return{
        ...state,
        isFetching:true,
        error:''
      }
      case PROFILESUCCP:
        return{
          ...state,
          isFetching:false,
          Profile:action.payload
        }
      case PROFILEFAILP:
        return{...state,
          error:action.error
        }
      default :
        return state

  }
}

export default ProfileR
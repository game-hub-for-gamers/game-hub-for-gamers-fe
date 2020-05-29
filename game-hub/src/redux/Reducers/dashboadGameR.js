import {
  STARTGAME,
  SUCCGAME,
  FAILGAME,
} from '../Actions/dashboardGames'
const init = {
  isFetching:false,
  games:[],
  err:'',
}
export const gameR =(state = init,action)=>{
  console.log("reducer",action)
  switch(action.type){
    case STARTGAME:
      return {
        ...state,
        isFetching:true,
      }
    case SUCCGAME:
      return {
        ...state,
        isFetching:false,
        games:action.payload
      }
    case FAILGAME:
      return {
        ...state,
        error:action.error,
      }
    default:
      return state
  }
}
// export default gameR

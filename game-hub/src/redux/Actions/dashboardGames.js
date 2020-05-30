import axios from 'axios'
export const STARTGAME = 'STARTGAME'
export const SUCCGAME  = 'SUCCGAME'
export const FAILGAME  = 'FAILGAME'

export const gameA = () => dispatch => {
  dispatch({type:STARTGAME})
  axios
    .get('http://localhost:3333/game/g')
    .then(res => { 
      dispatch({type:SUCCGAME,payload:res.data})} 
    )
    .catch(err => dispatch({type:FAILGAME,error:err.data}) )
}
// export default gameA;
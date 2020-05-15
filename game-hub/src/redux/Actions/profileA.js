import axios from 'axios'

// GET
// const PROFILESTARTG = 'PROFILESTARTG'
// const PROFILESUCC   = 'PROFILESUCC'
// const PROFILEFAIL   = 'PROFILEFAIL'
// POST
export const PROFILESTARTP = 'PROFILESTARTP'
export const PROFILESUCCP  = 'PROFILESUCCP'
export const PROFILEFAILP  = 'PROFILEFAILP'

// PUT
// DELETE

// const getProfile = () => {
//   return dispatch => {
//     axios
//     .get()
//   }
// }

// export const  postProfile = (credentials) => {
//   return dispatch =>{
//     dispatch({ type: PROFILESTARTP });
//     axios
//     .post('http://localhost:3333/api/u/u',credentials)
//     .then(res => {
//       dispatch({type:PROFILESUCCP, payload:res.data})
//     })
//     .catch(error => {
//       dispatch({type:PROFILEFAILP,err:error.data})
//     })
//   }
// }
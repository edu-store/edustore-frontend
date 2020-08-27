export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_APP_LIST': {
          
          return {...state, AppList : action.payload}  
        }
        default:{
    
          return state
        }
      }
}
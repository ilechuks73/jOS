export const applicationMenuReducer =(state, dispatch)=>{
  switch(dispatch.type){
    case "TOGGLE APPLICATION MENU": {
      return {...state, visible: !state.visible}
    }
    default:{
      return state
    }
  }
}
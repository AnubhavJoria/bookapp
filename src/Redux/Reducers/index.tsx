interface ActionA {
  type: string
  
}
import {combineReducers} from "redux";

export const initialState = {
  users : [],
  currentName : "",
  currentBook : "",
  currentDate : "",
  currentPrice : "",
  index : -1
}

const reducerFunction = (state = initialState, action : ActionA ) =>{
  switch(action.type){

    case action.type : "ADD"
      return {
        ...initialState,
        users : [...initialState.users, {
          name : initialState.currentName,
          book : initialState.currentBook,
          date : initialState.currentDate,
          price : initialState.currentPrice
        }]
      }
    case action.type : "DELETE"
      return {
        ...initialState,
        users : initialState.users.splice(initialState.index, 1)
      }
    // case action.type : "EDIT"
    //   return {
    //     ...initialState,
    //     // users : initialState.users.splice(initialState.index, 1, "hello")
    //     users : initialState.users.splice(initialState.index, 1, {
    //       name : initialState.currentName,
    //       book : initialState.currentBook,
    //       date : initialState.currentDate,
    //       price : initialState.currentPrice
    //     })
    //   }
  }


}
export const rootReducer = combineReducers({reducerFunction})



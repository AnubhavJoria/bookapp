import {combineReducers} from "redux";
interface ActionA {
  type: string
  payload ?: any
}


export const  users = [
  {
    name : 'Harry1',
    email : "harry1@gmail.com",
    book : "Goblet of fire1",
    price : 2001
  }, 
  {
    name : 'Harry2',
    email : "harry2@gmail.com",
    book : "Goblet of fire2",
    price : 2002
  } , 
  {
    name : 'Harry3',
    email : "harry3@gmail.com",
    book : "Goblet of fire3",
    price : 2003
  }
]

 


const reducerFunction = (state = users, action : ActionA ) =>{

  switch(action.type){

    case "ADD":
      return  [...state, action.payload]

    case "DELETE":
      return state.filter((data, index) => index !== action.payload);
      
    
    case "EDIT":
      return state = state.map((element, ind)=>{
        if(ind === action.payload.obj.index){
          return action.payload.obj.values
        }
        else{
          return element;
        }

      })
    default:
      return state;
  }


}
export const rootReducer = combineReducers({reducerFunction})



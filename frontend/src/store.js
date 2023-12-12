import {createStore , combineReducers , applyMiddleware} from "redux"   ; 
import thunk from "redux-thunk" 
import {composeWithDevTools} from "redux-devtools-extension"   ;
import { userReducer  , profileReducer , forgetPasswordReducer } from "./reducers/userReducers"; 




const reducer = combineReducers({   
   user: userReducer ,   
   profile:profileReducer,   
   forgotPassword: forgetPasswordReducer,  
} ) ; 

let intialState = {  
    user: {}, 
} ;

const middleware = [thunk] ; 
const store = createStore(reducer , intialState , composeWithDevTools(applyMiddleware(...middleware))) ;  
 
export default store ; 

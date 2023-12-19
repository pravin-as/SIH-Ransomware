import {createStore , combineReducers , applyMiddleware} from "redux"   ; 
import thunk from "redux-thunk" 
import {composeWithDevTools} from "redux-devtools-extension"   ;
import { userReducer  , profileReducer , forgetPasswordReducer } from "./reducers/userReducers";   
import { test_1_Reducer , test_2_Reducer , test_3_Reducer } from "./reducers/Test_Reducer"; 
// import { questionReducer } from "./reducers/questionReducer"; 
import { questionReducer}  from "./reducers/tempQuestionReducer" ; 




const reducer = combineReducers({   
   user: userReducer ,   
   profile:profileReducer,   
   forgotPassword: forgetPasswordReducer,    
   test_1: test_1_Reducer, 
   test_2: test_2_Reducer , 
   test_3: test_3_Reducer ,   
   question: questionReducer , 
} ) ; 

let intialState = {  
    user: {}, 
} ;

const middleware = [thunk] ; 
const store = createStore(reducer , intialState , composeWithDevTools(applyMiddleware(...middleware))) ;  
 
export default store ; 

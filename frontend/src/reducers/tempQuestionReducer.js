import { FETCH_QUESTION_REQUEST  ,FETCH_QUESTION_ERROR , FETCH_QUESTION_SUCCESS } from "../constants/tempquestionConstants";

export const questionReducer = (state = {questions: {}} , action)=>{ 
    switch(action.type){ 
          
        case FETCH_QUESTION_REQUEST:  
              return{    
                 ...state, 
                 loading: true ,
              } ; 
        case  FETCH_QUESTION_SUCCESS: 
               return{ 
                  ...state, 
                  loading: false , 
                  questions : action.payload ,
               }  ;  

        case FETCH_QUESTION_ERROR: 
              return{
                  ...state, 
                    loading: false , 
                    error: action.payload ,
              } 
         default :  
           return { 
            ...state , 
           }
    }  
}; 


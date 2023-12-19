import {
    FETCH_FIRST_QUESTION_ERROR , FETCH_FIRST_QUESTION_REQUEST, FETCH_FIRST_QUESTION_SUCCESS , FETCH_NEXT_SET_ERROR , 
    FETCH_NEXT_SET_REQUEST ,FETCH_NEXT_SET_SUCCESS , 
    FETCH_REPORT_ERROR , 
    FETCH_REPORT_REQUEST , 
    FETCH_REPORT_SUCCESS}

from "../constants/questionConstant" ;   


export const questionReducer = (state = {question: {}} , action)=>{ 
    switch(action.type){ 
          
        case FETCH_FIRST_QUESTION_REQUEST:  
              return{    
                 ...state, 
                 loading: true ,
              } ; 
        case  FETCH_FIRST_QUESTION_SUCCESS: 
               return{ 
                  ...state , 
                  loading: false , 
                  question : action.payload ,
               }  ;  
        case  FETCH_NEXT_SET_REQUEST:  
               return {  
                 ...state, 
                 loading: true , 
               } ; 
        case FETCH_NEXT_SET_SUCCESS: 
               return {    
                 ...state ,
                 loading: false , 
                 question: action.payload , 
               } ; 
        case FETCH_REPORT_REQUEST: 
               return  {
                  ...state , 
                  loading: true ,  
               }  

        case FETCH_REPORT_SUCCESS: 
                return{
                     ...state , 
                     loading: false ,
                     question : action.payload 
                }  

        case FETCH_REPORT_ERROR ,FETCH_FIRST_QUESTION_ERROR , FETCH_NEXT_SET_ERROR: 
              return{
                    ...state , 
                    loading: false , 
                    error: action.payload ,
              } 
       default : 
       return { 
              ...state  , 
       }
    } 
}; 


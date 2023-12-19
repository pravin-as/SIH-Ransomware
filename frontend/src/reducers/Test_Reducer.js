import {TEST_1_STARTING, FILE_DOWNLOAD_TESTING , TEST_1_COMPLETED, TEST_2_COMPLETED, TEST_2_STARTING , } from "../constants/test_1_Constants" ;     


import {OPEN_PORT_TEST_STARTING ,OPEN_PORT_TEST_FINISHED}  from "../constants/test_2_Constants" ; 

import {TEST_3_STARTING , TEST_3_COMPLETED}  from  "../constants/test_3_Constant" ;  

export const test_1_Reducer  = (state = {test_1_Result : {}} , action)=>{   

    switch(action.type){ 
       case FILE_DOWNLOAD_TESTING: 
            return {  
                 ...state , 
                 loading_1 : true  , 
                 result_1  : false ,  
                
            }  ;
       case TEST_1_STARTING:   
             return {  
                 ...state , 
                 loading: true , 
                 result_1 : false, 
             }  ;
        case TEST_1_COMPLETED:
            return { 
               ...state ,
               loading: true ,  
               result_1: false ,
        } ;
        case TEST_2_STARTING :  
        return {  
          ...state ,
               loading : true ,   
               result_1: false , 
        } ; 
        case TEST_2_COMPLETED: 
            return {  
               ...state ,
                 loading: false , 
                 result_1 : action.payload ,
            } ; 
        default : 
         return {...state} ; 


    }
} ; 


export const test_2_Reducer = (state  = {test_2_Result : {}} ,action )=>{ 
       switch(action.type){ 
          case  OPEN_PORT_TEST_STARTING:   
          return {  
               ...state ,
              loading_1 : true ,  
              result_2 : false , 
          } ; 
          case OPEN_PORT_TEST_FINISHED: 
          return{  
               ...state ,
              loading_2: false , 
              result_2 : action.payload , 
          } ;  
          default : 
          return {...state} ; 

       } 

}   ; 



export  const test_3_Reducer = (state = {test_3_Result : {} } , action)=>{ 
     switch(action.type){ 
          case TEST_3_STARTING : 
          return {  
               ...state ,
               loading_3: true ,  
               result_3 : false , 
          }   ; 
          case TEST_3_COMPLETED : 
          return {  
               ...state ,
               loading_3 : false ,  
               result_3 : action.payload, 
          } ; 
          
          default : 
          return{ 
                ...state , 
          }
            
     }


}; 
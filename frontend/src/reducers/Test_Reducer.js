import {TEST_1_STARTING, FILE_DOWNLOAD_TESTING , TEST_1_COMPLETED, TEST_2_COMPLETED, TEST_2_STARTING, FILE_DOWNLOAD_TESTING_FAILED , } from "../constants/test_1_Constants" ;     


import {OPEN_PORT_TEST_STARTING ,OPEN_PORT_TEST_FINISHED, OPEN_PORT_TEST_FAILED}  from "../constants/test_2_Constants" ; 

import {TEST_3_STARTING , TEST_3_COMPLETED, NEW_ACCESS_DOMAIN, NEW_ACCESS_DOMAIN_FAILED}  from  "../constants/test_3_Constant" ;  

export const test_1_Reducer  = (state = { result_1 : {}} , action)=>{   

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
               loading_1: true ,  
               result_1: false ,
        } ;
        case TEST_2_STARTING :  
        return {  
          ...state ,
               loading_1 : true ,   
               result_1: false , 
        } ; 
        case TEST_2_COMPLETED:   
        
            return {  
               ...state ,
                 loading_1: false , 
                 result_1 : action.payload ,
            } ;  
         case FILE_DOWNLOAD_TESTING_FAILED : 
            return { 
               ...state , 
               loading_1: false ,  
               result_1 : [false , false ] , 
            } 
        default : 
         return {...state} ; 


    }
} ; 


export const test_2_Reducer = (state  = { result_2 : {}} ,action )=>{ 
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
          case OPEN_PORT_TEST_FAILED : 
            return { 
                ...state , 
                loading_2: false ,  
                result_2 : [false , false ] , 
            }
          default : 
          return {...state} ; 

       } 

}   ; 



export  const test_3_Reducer = (state = { result_3 : {} } , action)=>{ 
     switch(action.type){  
          case NEW_ACCESS_DOMAIN : 
             return { 
                 ...state , 
                 loading_3: true , 
            }
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
          case NEW_ACCESS_DOMAIN_FAILED : 
             return  { 
                ...state , 
                loading_3: false , 
                result_3: [false,  false ],
             }
          default : 
          return{ 
                ...state , 
          }
            
     }


}; 
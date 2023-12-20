import { NMAP_DATA_FETCH_ERROR , NMAP_DATA_FETCH_REQUEST , NMAP_DATA_FETCH_SUCCESS } from "../constants/NmapConstant";  


export const NmapReducers = (state = {nmap : {}} , action)=>{ 
    switch(action.type){        
         case NMAP_DATA_FETCH_REQUEST: 
          return { 
            ...state , 
            loading : true ,  

          } ; 
          case NMAP_DATA_FETCH_SUCCESS: 
          return  {  
            ...state , 
            loading: false , 
            nmap: action.payload , 
          } ;  
          case NMAP_DATA_FETCH_ERROR:
            return {  
                 ...state , 
                 loading: false , 
                 error: action.payload , 
            } 
          default: 
            return { 
                 ...state , 
            } 
    }
}
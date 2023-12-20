import { NMAP_DATA_FETCH_ERROR , NMAP_DATA_FETCH_REQUEST , NMAP_DATA_FETCH_SUCCESS } from "../constants/NmapConstant";  

import axios from "axios" ;  
// fetch first question
export const NmapAction =  ()=>   async(dispatch)=> {  
     
    await dispatch({type: NMAP_DATA_FETCH_REQUEST}) ; 
    let link  = `http://localhost:4000/api/v1/scanVuln`;            
    await axios.get(link).then( 
        async  (response)=>{ 
            console.log(response) ; 
            await dispatch({type: NMAP_DATA_FETCH_SUCCESS , 
            payload: response.detectedVuln}) ;  
    })
    .catch((error)=>{ 
             dispatch({type: NMAP_DATA_FETCH_ERROR, 
             payload: error.message}) ;
    }); 

}
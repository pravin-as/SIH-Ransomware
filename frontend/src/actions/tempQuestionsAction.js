import { FETCH_QUESTION_REQUEST  ,FETCH_QUESTION_ERROR , FETCH_QUESTION_SUCCESS } from "../constants/tempquestionConstants";    

import axios from "axios" ; 

export const getTempQuestion = ()=> async(dispatch)=>{ 
       await dispatch({  type:  FETCH_QUESTION_REQUEST})   ; 
       
       let link  = `http://localhost:4000/api/v1/tempQuestion`; 
       await axios.get(link).then(async(response)=>{ 

         console.log(response) ;
         await dispatch({ 
            type: FETCH_QUESTION_SUCCESS , 
            payload: response.data.data, 
         }) 
         
       }).catch((error)=>{ 
        dispatch({
                  type: FETCH_QUESTION_ERROR, 
                  payload: error.message}) ;
       })

    

}



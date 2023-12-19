import { 
    FETCH_FIRST_QUESTION_ERROR ,FETCH_FIRST_QUESTION_REQUEST , FETCH_FIRST_QUESTION_SUCCESS ,          FETCH_NEXT_SET_ERROR,
    FETCH_NEXT_SET_REQUEST ,
    FETCH_NEXT_SET_SUCCESS , 
    FETCH_REPORT_ERROR ,
    FETCH_REPORT_REQUEST , FETCH_REPORT_SUCCESS  }  

from "../constants/questionConstant";    

import axios from "axios" ;  
// fetch first question
export const fetchfirstQuestion =  ()=>   async(dispatch)=> { 
        await dispatch({type: FETCH_FIRST_QUESTION_REQUEST}) ; 
        let link  = `http://localhost:4000/api/v1/first`;            
        await axios.get(link).then( 
            async  (response)=>{ 
                console.log(response) ; 
                await dispatch({type: FETCH_FIRST_QUESTION_SUCCESS , 
                payload: response.questions}) ;  
        })
        .catch((error)=>{ 
                 dispatch({type: FETCH_FIRST_QUESTION_ERROR, 
                 payload: error.message}) ;
        }); 
} 
// fetch next set 
export const fetchSetQuestion =  (question)=>   async(dispatch)=> { 
    await dispatch({type: FETCH_NEXT_SET_REQUEST}) ; 
    let link  = `http://localhost:4000/api/v1/set-response`;    
    const config = {headers: {"content-Type": "application/json"} }         
    await axios.post(link , {question} , config).then( 
        async  (response)=>{ 
            console.log(response) ; 
            await dispatch({type: FETCH_NEXT_SET_SUCCESS , 
            payload: response.questions}) ;  
    })
    .catch((error)=>{ 
             dispatch({type: FETCH_NEXT_SET_ERROR, 
             payload: error.message}) ;
    }); 
}

export const fetchReport =  ()=>   async(dispatch)=> { 
    await dispatch({type: FETCH_REPORT_REQUEST}) ; 
    let link  = `http://localhost:4000/api/v1/report`;            
    await axios.get(link).then( 
        async (response)=>{ 
            console.log(response.data) ; 
            await dispatch({type: FETCH_REPORT_SUCCESS , 
            payload: response.data.data}) ;  
    })
    .catch((error)=>{ 
             dispatch({type: FETCH_REPORT_ERROR, 
             payload: error.message}) ;
    }); 
}
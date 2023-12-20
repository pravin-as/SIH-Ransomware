import {OPEN_PORT_TEST_STARTING,  OPEN_PORT_TEST_FINISHED, OPEN_PORT_TEST_FAILED }   from  "../constants/test_2_Constants" ;  

import axios from 'axios' ; 

export  const OPEN_PORT_TEST = ()=> async(dispatch)=>{  
            dispatch({type: OPEN_PORT_TEST_STARTING}) ;   
            let link  = `http://localhost:4000/api/v1/nmap/openPort`;  
            await axios.get(link)
            .then(async(res)=>{ 
                  const list_ = res.data.openPorts ;   
                  console.log(list_) ; 
                  const l1  = [445 , 3389] ; 
                  const l2  = [true  , true] ; 
                  for(let  i =  0 ; i < list_.size  ; i++){ 
                      if(list_[i] == l1[0]){ 
                           l2[0] = false ; 
                      }
                      if(list_[i] == l1[1]){ 
                           l2[1] = false ;
                      }
                  }  
                     
                  dispatch({type: OPEN_PORT_TEST_FINISHED , 
                  payload: l2}) ;
            }) 
            .catch((err)=>{  
                const l2 = [false , false] ; 
                dispatch({type: OPEN_PORT_TEST_FAILED , 
                    payload: l2}) ;
            })

}


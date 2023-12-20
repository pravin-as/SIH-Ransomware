import {TEST_1_STARTING ,FILE_DOWNLOAD_TESTING  , TEST_1_COMPLETED , TEST_2_COMPLETED , TEST_2_STARTING , FILE_DOWNLOAD_TESTING_FAILED ,  } from '../constants/test_1_Constants' ; 

import axios from "axios" ;

export const test_File_Download= ()=>async(dispatch)=>{    
    await dispatch({type : FILE_DOWNLOAD_TESTING })
    var arr = [true , true];  
    await  dispatch({type :  TEST_1_STARTING}) ; 
    const fileUrl = 'https://nmap.org/dist/nmap-7.94-setup.exe'; 
    const encryptfile  = 'https://nmap.org/dist/nmap-7.94-setup.exe' ; 
    await axios({
      url: fileUrl,
      method: 'GET',
      responseType: 'blob',
    })
      .then((response) => {
        const contentType = response.headers['content-type'];

        if (contentType && contentType.startsWith('application/octet-stream')) {
          arr[0] = false ;   

        } else {
          console.error('Not a valid file response'); 
          dispatch({type : FILE_DOWNLOAD_TESTING_FAILED}) ; 
          arr[0] = true ; 
        }
      })
      .catch((error) => { 
        dispatch({type: TEST_1_COMPLETED}) ; 
        console.error('Error downloading file:', error); 
        arr[0] = true ; 
      });   
      
      dispatch({type: TEST_2_STARTING}) ; 

      await axios({
        url: encryptfile,
        method: 'GET',
        responseType: 'blob',
      })
        .then((response) => {
          const contentType = response.headers['content-type'];
  
          if (contentType && contentType.startsWith('application/octet-stream')) {
            arr[1] = false ;   
  
          } else {
            console.error('Not a valid file response'); 
            dispatch({type : FILE_DOWNLOAD_TESTING_FAILED}) ; 
            arr[1] = true ; 
          }
        })
        .catch((error) => { 
          console.error('Error downloading file:', error); 
          arr[1] = true ; 
        }); 
        dispatch({type: TEST_2_COMPLETED , 
                   payload : arr,   
        })  ;  
}
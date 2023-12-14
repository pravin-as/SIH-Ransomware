import {TEST_1_STARTING ,FILE_DOWNLOAD_TESTING } from '../constants/test_1_Constants' ; 
import axios from "axios" ;

export const test_File_Download= ()=>async(dispatch)=>{    
    await dispatch({type : FILE_DOWNLOAD_TESTING })
    var arr = [true , true];  
    await  distpatch({type :  TEST_1_STARTING}) ; 
    const fileUrl = 'url'; 
    const encryptfile  = 'url' ; 
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
          arr[0] = true ; 
        }
      })
      .catch((error) => {
        console.error('Error downloading file:', error); 
        arr[0] = true ; 
      });    
      
      dispatch({TYPE: TEST_1_COMPLETED}) ; 
      dispatch({TYPE: TEST_2_STARTING}) ; 

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
            arr[1] = true ; 
          }
        })
        .catch((error) => {
          console.error('Error downloading file:', error); 
          arr[1] = true ; 
        }); 
        distpatch({type: TEST_1_COMPLETED , 
                   payload : {value : arr} ,   
        })  ;  
}
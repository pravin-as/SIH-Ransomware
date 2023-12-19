import {TEST_3_STARTING , TEST_3_COMPLETED} from "../constants/test_3_Constant" ;   

export const test_3 = ()=> async(dispatch)=>{
    
    dispatch({type: TEST_3_STARTING});  
    let arr = [true , true] ; 
    dispatch({type: NEW_ACCESS_DOMAIN}) ;  
    let url = `domain`
    let link  = `https://api.whoapi.com/?domain=${url}&r=whois&apikey=250d83bfc076a5401150f474907831af` ; 
    let new_  = false ; 
    await axios.get(link)
    .then((data)=>{   
        const creationDate =  Date(data.data_created);
  const currentDate = new Date();
  const ageInDays = Math.floor((currentDate - creationDate) / (24 * 60 * 60 * 1000));  
      new_ = ageInDays < 45;

    })
    .catch((err)=>{ 
         new_  = true ;
    }) ; 
    if(new_){ 
                 await axios.get(`www.${url}`).then(()=>{ 
                      arr[0] = false ; 
                 })
                 .catch(()=>{ 
                      arr[0] = true ;  
                 })
    } 
    else{ 
            arr[0] = true;
    }
    
    dispatch({type: TEST_3_COMPLETED , 
     payload : arr}) ; 

    

}



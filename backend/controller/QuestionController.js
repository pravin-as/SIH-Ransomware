const catchAsyncError = require("../middleware/catchAsyncError");  
const axios  =  require('axios') ;    
const Quesiton =  require("../models/questionModel") ;  
axios.default.defaults.withCredentials = true ; 

// get first set from the api 
exports.first  =  catchAsyncError(async (req , res , next)=>{      
    let  link  =  `$link$/first` ; 
    axios.get(link)
    .then(async(response)=>{ 
            res.status(200).send({ 
                 success: true , 
                 data : response.data ,
            })
    })
    .catch((error)=> { 
        res.status(401).send({ 
            success: false ,   
            message: error,
        })
    }) ; 

}) ; 
// get next question from the api
exports.ask  =  catchAsyncError(async(req , res , next)=>{ 
    const data =  req.body ; 
    const config = {headers: {"content-Type": "application/json"} }
    let link = `$link$/ask`;
    axios.post(link , data , config).then(async(response)=>{ 
          res.status(200).send({
             success: true , 
             data: response.data , 
          })
    }) 
    .catch((error)=>{ 
            res.status(401).send({ 
                success: false , 
                message: error , 
            }) ; 
    })
   
}) ;   
// get final report 
exports.report =  catchAsyncError(async(req  , res , next)=>{    
    const data =  req.body ; 
    const config = {headers: {"content-Type": "application/json"} }
    let link = `$link$/report`;
    axios.post(link , data , config).then(async(response)=>{ 
          res.status(200).send({
             success: true , 
             data: response.data , 
          })
    }) 
    .catch((error)=>{ 
            res.status(401).send({ 
                success: false , 
                message: error , 
            }) ; 
    })
   
     
}) ;   


exports.getRandm = catchAsyncError(async (req, res, next) => {
    try {   

      // Assuming your Question model has a 'text' field for the question text
      const randomQuestions = await Quesiton.aggregate([{ $sample: { size: 5 } }]);
      console.log(randomQuestions) ;  
    
      res.status(200).json({
        success: true,
        data: randomQuestions,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
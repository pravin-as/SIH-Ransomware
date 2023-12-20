const catchAsyncError = require("../middleware/catchAsyncError");  
const axios  =  require('axios') ;    
const Quesiton =  require("../models/questionModel") ;    
const questionSet  = require("../models/questionSetModel") ; 
axios.default.defaults.withCredentials = true ; 

// get first set from the api 
exports.first  =  catchAsyncError(async (req , res , next)=>{      
    let  link  =  `http://127.0.0.1:5000/next-question-api/` ;   


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
exports.ask = catchAsyncError(async (req, res, next) => {
  console.log("mei bhi aya");
  
  try {
    const data = req.body.data;
    const user_id = req.body._id;

    // Assuming questionSet is your Mongoose model for questions  
    for(let i = 0 ; data.queries !== undefined && i < data.queries.length ; i++){
    const question = await questionSet.create(data.queries[i]);
    }
    const config = { headers: { "Content-Type": "application/json" } };
    const link = `http://127.0.0.1:5000/next-question-api/`;

    const response = await axios.post(link, data, config);

    let questions = []; 
    console.log("tishang");  
    console.log(data) ;
    console.log(response.data);  

    const received  =  response.data.result ;   
    for(let i = 0 ; i < received.length ; i++){ 
            const q = await Quesiton.findOne({id: received[i]}) ;   
            questions.push(q) ; 
    } 
    console.log(questions) ;
     
    res.status(200).send({
      success: true,
      message: questions,
    });
  } catch (error) {
    console.error(error);

    // Handle specific error cases if needed
    if (error.response) {
      // The request was made, but the server responded with a status code
      // outside of the 2xx range
      res.status(error.response.status).send({
        success: false,
        message: error.response.data,
      });
    } else if (error.request) {
      // The request was made, but no response was received
      res.status(500).send({
        success: false,
        message: "No response received from the server",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).send({
        success: false,
        message: "Error in setting up the request",
      });
    }
  }
});
 
// get final report 
exports.report =  catchAsyncError(async(req  , res , next)=>{    
    const data =  req.body._id ;
    const result  = await Quesiton.deleteMany({user_id : data }) ;  
    const config = {headers: {"content-Type": "application/json"} }
    let link = `http://127.0.0.1:5000/next-question-api/`;
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
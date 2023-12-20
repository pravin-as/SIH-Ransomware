const mongoose = require("mongoose") ; 
const validator = require("validator") ; 

const questionSchema = new mongoose.Schema({ 
    id : { 
       type: Number , 
     //   required: [true, "id not declared"] ,
    },
    question : {
        type: String ,  
     //    required: [true , "Invalid Entry"], 
     //    unique : true ,   
    },   
    category: { 
         type: String , 
     //     required: [true , "Field is required"] ,
    }, 
    description:[ { 
         type: String , 
     //     required: [true , "Field is required"]
    }] ,  
    confidence:{ 
          type: Number ,
          // required:[false] ,  
          
    } , 
    response:{ 
         type: Number , 
    }


}) ; 
module.exports = mongoose.model("question" ,questionSchema) ; 
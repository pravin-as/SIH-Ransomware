const mongoose = require("mongoose") ; 
const validator = require("validator") ;
const bcrypt  =  require("bcryptjs")  ;  
const jwt = require("jsonwebtoken") ;    
const crypto = require("crypto"); 

const userSchema  = new mongoose.Schema({ 
      name:{ 
        type: String,
        required :[true , "please enter name"], 
        maxLength:[30 , "Maximum Limit exceeded"], 
        minLength: [3 , "Name should have atleast 3 characters"] ,  
    } 
    , 
    email:{ 
    type : String , 
    required: [true , "please enter Email"] , 
    unique: true , 
    validate : [validator.isEmail, "Please Enter a valid Email"] , 
    }, 
    password : { 
         type: String , 
         required: [true , "Please eneter the Password"] , 
         minLength:[8 , "Password Should be greater than 8 character"] , 
         select: false ,
    }  
    
}) ;


// pre-processing before saving the password 
userSchema.pre("save" , async function(){   
     if(!this.isModified("password")){ 
         return  ;
     }
     this.password =  await await bcrypt.hash(this.password , 10) ; 
}) ; 


// JWT Token
userSchema.methods.getJWTToken =  function(){ 
    return jwt.sign({id:this._id} , process.env.JWT_SECRET , {expiresIn: process.env.JWT_EXPIRE ,  }) ;
}  
// comparing the password
userSchema.methods.comparePassword = async function(enteredPassword){ 
     return await bcrypt.compare(enteredPassword , this.password) ; 
}  

// generating reset password token
userSchema.methods.getResetPasswordToken  =  function(){      
    //Generating Token 
    const resetToken = crypto.randomBytes(20).toString("hex");   
    console.log(resetToken) ; 
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex") ; 
    console.log(this.resetPasswordToken) ; 
    //   
    this.resetPasswordExpire
    = Date.now() + 15*60*1000
       
 }   
 
 

module.exports = mongoose.model("user" , userSchema); 
 
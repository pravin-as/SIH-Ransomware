const ErrorHandler = require("../utils/errorhandler") ; 
const catchAsyncErrors = require('./catchAsyncError') ;   
const jwt =  require("jsonwebtoken") ; 

exports.isAuthenticatedUser = catchAsyncErrors(async(req ,res , next)=>{ 
   console.log(req) ;   
   console.log("Authenticating the user") ; 
   const token  = req.cookies.token ; 
   console.log(`generated using JWT token : ${token}`);
   const decodeData = jwt.verify(token , process.env.JWT_SECRET) ;    

   next() ; 
}) ;   

exports.authorizedRoles = (...roles)=>{ 
    return (req , res , next)=>{ 
          if(!roles.includes(req.user.role)){
             return next(new ErrorHandler(`Roles: ${req.user.role} is not allowed to access this resource`  , 403)) ; 
          }
          next() ; 
    }

}
exports.forgotPassword = catchAsyncErrors(async(req  , res , next)=>{ 
   //   forgot password ;

})



 
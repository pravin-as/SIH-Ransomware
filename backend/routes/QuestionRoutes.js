const express = require('express') ; 
const router  = express.Router(); 
const user  =  require("../controller/userController") ; 
const auth  = require("../middleware/auth.js") ;     
const question  = require("../controller/QuestionController") ; 

// asking for the first question

router.route('/set-first').get(auth.isAuthenticatedUser , question.first) ; 

// asking for  next quesiton
router.route('/set-response').post(auth.isAuthenticatedUser , question.ask) ;    

// asking for final report 
router.route('report').post(auth.isAuthenticatedUser  , question.report) ;   

// asking ofr tempQuestion 
router.route('/tempQuestion').get(   question.getRandm )





module.exports = router ; 
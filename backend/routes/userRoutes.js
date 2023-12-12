const express = require('express') ; 
const router  = express.Router(); 
const user  =  require("../controller/userController") ; 
const auth  = require("../middleware/auth.js") ; 

// Register User
router.post("/register" , user.registerUser);   
// Login User
router.post('/login' , user.loginUser) ;    
// Logout User
router.route("/logout").get(user.logutUser) ;   
// forgot Password 
router.route("/password/forgot").post(user.forgotPassword) ;     
// Reset User Password
router.route("/password/reset/:token").put(user.resetPassword) ;    
// Get my Profile
router.route("/me").get( auth.isAuthenticatedUser,user.getUserDetails);
// update User Password
router.route("/password/update").put( auth.isAuthenticatedUser,user.updateUserPassword);
// update User Details
router.route("/me/update").put( auth.isAuthenticatedUser,user.updateProfile);
// get all the user available in the system
router.route("/admin/users").get(auth.isAuthenticatedUser , auth.authorizedRoles("admin") , user.getAllUsers) ; 
// Getting details about a User
router.route("/admin/users/:id").get(auth.isAuthenticatedUser , auth.authorizedRoles("admin") , user.getSingleUsers) ;   
// Update User Role
router.route("/admin/users/:id").put(auth.isAuthenticatedUser , auth.authorizedRoles("admin") , user.updateUserRole) ;     
// Deleting the user
router.route("/admin/users/:id").delete(auth.isAuthenticatedUser , auth.authorizedRoles("admin") , user.deleteProfile) ;   

module.exports  = router ; 
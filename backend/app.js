const express = require('express') ; 
const cookieParser = require('cookie-parser') ; 
const app = express() ; 
const bodyParser = require('body-parser') ; 
const fileUpload =  require("express-fileupload") ;  

app.use(cookieParser()) ; 
app.use(express.json()) ; 
app.use(bodyParser.urlencoded({extended: true})) ;   


// adding control for backend CORS resolution 
app.use((res , req ,next)=>{ 

    // Set the allowed origins
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend domain
  
    // Set the allowed methods
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
    // Set the allowed headers
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Allow credentials (cookies, authorization headers) to be sent
    res.header('Access-Control-Allow-Credentials', true);
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      return res.status(200).json({});
    }
  
    next();

}) ; 


app.use(fileUpload()) ; 

app.use(function(req  ,res , next){ 
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
}) ; 

const errorMiddleware = require('./middleware/error') ;   
const nMap =  require('./routes/nmapRoutes') ; 
const user = require('./routes/userRoutes');  

app.use("/api/v1" , nMap) ;   
app.use("/api/v1" , user) ;   

app.use(errorMiddleware) ; 


module.exports= app ; 



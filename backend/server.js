const app =  require('./app') ; 
const dotenv = require("dotenv") ; 
const cors = require("cors") ; 
const morgan = require("morgan") ; 

dotenv.config({path: "D:\\SIH-Ransomware\\backend\\config.env"}) ; 
 
app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(cors({origin:  "http://localhost:3000", credentials: true}));   
// app.use(cors()) ; 
app.use(morgan('tiny')) ;   



process.on("uncaughtException" , (err)=>{ 
      console.log(err.message) ; 
      console.log("shutting Down the server due to uncaught Exception") ; 
      server.close(()=>{
         process.exit(1) ; 
      })
}) ;   

const connectDatabase = require("./Database/database.js") ;   
connectDatabase(); 
app.listen(process.env.PORT || 3000 , ()=>{ 
     console.log(`server is working on http://localhost:${process.env.PORT}`) 

}) ; 

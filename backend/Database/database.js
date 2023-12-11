const mongoose =  require('mongoose') ; const connectDatabase = ()=>{
       mongoose.connect(process.env.MONGOOSE_URI , {
          useNewUrlParser: true , 
          useUnifiedTopology: true
       }).then((data)=>{ 
          console.log(`mongoDB connect with server: ${data.connection.host}`); 
       }).catch((err)=>{ 
          console.log(err); 
       }); 
}
module.exports = connectDatabase ; 
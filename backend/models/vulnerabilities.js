const mongoose = require("mongoose") ; 
const validator = require("validator") ; 

const vulnerabilitiesSchema = new mongoose.Schema({ 

    cveID : {
        type: String ,  
        required: [true , "Invalid CVE ID"],  
    },   
    dateAdded:{ 
        type: Date,   
        required: [true] ,
    }, 
    dueDate: {
        type: String ,   
        required: [true] , 
        
    }, 
    knownRansomwareCampaignUse:{ 
        type: String , 
    } , 
    notes:{ 
         type: String, 
    }, 
    product:{ 
         type: String,  
    }, 
    requiredAction:{ 
        type: String, 
    }, 
    shortDescription: { 
        type: String ,
    }, 
    vendorProject: {
        type: String ,
    }


}) ; 
module.exports = mongoose.model("vulnerabilities" ,vulnerabilitiesSchema) ; 
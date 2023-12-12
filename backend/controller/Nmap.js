var nmap = require('node-nmap-vulners');
const catchAsyncError = require('../middleware/catchAsyncError');
const axios = require('axios') ;   
const vulnerabilities = require("../models/vulnerabilities"); 
nmap.nmapLocation = "nmap"; //default

//    Accepts array or comma separarted string for custom nmap commands in the second argument.  
exports.scanOnPort  = catchAsyncError(async (req , res , next)=>{  
    const ipAdd = req.body.ipAdd ;  
    console.log(ipAdd) ;    
    // await axios.get(`https://api.shodan.io/shodan/host/${ipAdd}?key=${process.env.SHADON_API_KEY}`)
    // .then( async(response)=>{   
    //     console.log("Checking Common Vulnerabilities") ; 
    //     vulnerabilities.countDocuments().then((count)=>{ 
    //         console.log(count); 
    //     }) 
    //     var getList ;  
    //         await vulnerabilities.distinct('cveID').then((entry)=>{ 
    //             getList = entry; 
    //     });  
    //     //    console.log(getList) ; 
    //     const commonCVEIDs = response.data.vulns.filter(cveID => getList.includes(cveID)); 
    //             res.status(200).send({ 
    //                 message: "nmap succeeded" , 
    //                 success: true, 
    //                 vuln : commonCVEIDs,
    //             }) ; 
    // })
    // .catch((err)=>{ 
    //      res.status(500).send({
    //         message: "nmap failed" , 
    //         success: false , 
    //         err: err
    //      })
    // }); 
    
    var nmapscan = new nmap.NmapScan( `${ipAdd} --script vulners` , '-sV');   
    console.log(ipAdd) ; 
    let data1;

    nmapscan.on('complete', async (data) => {
        console.log(data);
        data1 = data[0].openPorts;  
        var vulnerity = [] ; 
        for (var i = 0; i < data1.length; i++) {
            // Check if the current element has a 'vulners' property
            if (data1[i].vulners) {
              // Add the vulners to the list_
              vulnerity = vulnerity.concat(data1[i].vulners);
            }
          }
          

        await console.log(data1);  
        await console.log(vulnerity) ; 

        if (!data1 || data1.length === 0) {
            data1 = "No vulnerability detected";
        }
        vulnerabilities.countDocuments().then((count)=>{ 
                    console.log(count); 
                })   
        var getList ;  
        await vulnerabilities.distinct('cveID').then((entry)=>{ 
                getList = entry; 
        });  
        const commonCVEIDs = await vulnerity.filter(cveID => getList.includes(cveID)); 
        res.status(200).send({
            success: true,
            message: "nmap succeed", 
            commonVuln : commonCVEIDs ,  
            detectedVuln: vulnerity, 
        });   
        
       
    });

    nmapscan.on('error', function (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            message: "Error during nmap scan",
            error: error.message,
        }); 
       
    });

    await nmapscan.startScan();  
  


}
) ; 
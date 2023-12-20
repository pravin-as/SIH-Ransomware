const express  = require("express") ; 
const router  = express.Router() ; 
const nMap = require('../controller/Nmap') ; 

router.route('/scanVuln').get( nMap.scanOnPort);   
router.route('nmap/openPort').get(nMap.openPorts) ; 
module.exports = router ; 
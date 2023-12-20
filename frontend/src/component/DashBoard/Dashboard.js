import {useEffect,useState} from 'react';
import BasicLineChart from './LineChart.js';
import  BasicPie from './PieCharter.js';

const Dashboard = () => {
   
   const[record,setRecord] = useState([])
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
   useEffect(() => {
      getData();
   },)
    
    return (
    <div class="col main pt-5 mt-3">
         
        
        <p class="lead d-none d-sm-block" style={{fontSize:"40px", textAlign:"center"}}>DASHBOARD</p>
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Answered</h6>
                        <h1 class="display-4">10</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Not Answered</h6>
                        <h1 class="display-4">3</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Confident</h6>
                        <h1 class="display-4">5</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Partial</h6>
                        <h1 class="display-4">2</h1>
                    </div>
                </div>
            </div>
        </div>
        <hr/>

        
            <BasicLineChart/>
            <div style={{display:"flex"}}>
                <BasicPie/>
                <BasicPie/>
            </div>
            <div style={{display:"flex"}}>
                <BasicPie/>
                <BasicPie/>
            </div>
            
    </div>
    )
};
export default Dashboard;
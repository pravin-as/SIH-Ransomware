import './App.css';  
import LoginSignUp from "./component/layout/LoginSignUp.js" ;    
import Home from "./component/layout/Home/Home"
import { BrowserRouter as Router }  from 'react-router-dom';   
import WebFont from "webfontloader" ;  
import store from './store.js';
import {Route , Routes} from "react-router-dom" ; 
import React from 'react';   
import { useSelector } from 'react-redux';   
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {loadUser} from "./actions/userActions" 
import Questions from './component/layout/Questions/Questions.js';  
import TestingComponent from './component/TestingCompontent/TestingCompontent.js';
import Results from './component/Results/Results.js'; 
import NMap from './component/layout/nMap/Nmap.js'; 
import ResultsDashBoard from "./component/DashBoard/ResultsDashBoard.js"


function App() {  
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });

    console.log(user);

    // Conditionally dispatch the action
    if (isAuthenticated && !user) {
      dispatch(loadUser());
    }
  }, [isAuthenticated, user, dispatch]); 
  return (   
    <Router>   
        
     
     <Routes>   
    {!isAuthenticated && <Route path = "/"  Component={LoginSignUp}/>} 

    {isAuthenticated && <Route path = "/" Component={Home}/>}    
    {isAuthenticated && <Route path = "/questions" Component={Questions}/>}   
    {isAuthenticated && <Route path = "/auto-test" Component={TestingComponent}/>}   
    {isAuthenticated && <Route path = "/result" Component={Results}/>}   
    {isAuthenticated && <Route path = "/toNmap" Component={NMap}/>}   
    <Route path="/ResultsDashBoard" element={<ResultsDashBoard />} />

   
    
    </Routes>  
  
    </Router>  
    

  );
}

export default App;

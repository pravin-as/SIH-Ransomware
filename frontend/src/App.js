import './App.css';  
import Header from "./component/layout/Header/Header.js"   
import Footer from "./component/layout/Footer/Footer.js" 
import LoginSignUp from "./component/layout/LoginSignUp.js" ;   
import { BrowserRouter as Router }  from 'react-router-dom';   
import WebFont from "webfontloader" ;  
import store from './store.js';
import {Route , Routes} from "react-router-dom" ; 
import React from 'react';   
import { useSelector } from 'react-redux';  
import {loadUser} from "./actions/userActions"

function App() {  
  const {isAuthenticated, user} =  
   useSelector(state=>state.user) ; 
   React.useEffect(()=>{ 
       WebFont.load({
          google: { 
             families: ["Roboto" , "Droid Sans" , "Chilanka"]
          }
       }) ; 
       console.log(user) ; 

       if(isAuthenticated){ 
           store.dispatch(loadUser()) ; 
       }
   })
  return (   
    <Router>
    <LoginSignUp/> 
    </Router>
  );
}

export default App;

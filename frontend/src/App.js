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
    {/* {isAuthenticated && <Header/>} */}
    <Routes>   
    {!isAuthenticated && <Route path = "/"  Component={LoginSignUp}/>} 

    {isAuthenticated && <Route path = "/" Component={Home}/>}  

    </Routes>
    {/* {isAuthenticated && <Footer/>} */}
    </Router>  
    

  );
}

export default App;

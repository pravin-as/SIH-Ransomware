// TestingComponent.js

import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader.js';
import { test_File_Download } from '../../actions/test_1_Actions.js';
import { OPEN_PORT_TEST } from '../../actions/test_2_Actions.js';
import { test_3 } from '../../actions/test_3_Actions.js';
import './TestingComponent.css'; // Import your CSS file

function TestingComponent() {  

  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const { loading_1, results_1 } = useSelector((state) => state.test_1);
  const { loading_2, results_2 } = useSelector((state) => state.test_2);
  const { loading_3, results_3 } = useSelector((state) => state.test_3);
  const [dots, setDots] = useState('.');
  useEffect(()=>{
  dispatch(test_File_Download());
  dispatch(OPEN_PORT_TEST());
  dispatch(test_3()); 
  } , []) ; 

  useEffect(() => {
    if (!loading_1 && !loading_2 && !loading_3) {
      // All tests have finished loading
      setTimeout(() => navigate('/result', { state: { id: 1, name: 'sabaoon' } }), 10000);
    }
  }, [loading_1, loading_2, loading_3, navigate]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots === '...' ? '' : prevDots + '.'));
    }, 500); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Fragment>  
      <Loader/>
      <div className="testing-container">
        {(loading_1  || loading_2 ||loading_3  || loading_1 === undefined ) && (
          <div className="floating-box">
            <span>Test 1</span>
            <div className="loading">{`Loading${dots}`}</div>
          </div>
        )}
        {(loading_1 || loading_2  ||loading_3 || loading_2 === undefined ) && (
          <div className="floating-box">
            <span>Test 2</span>
            <div className="loading">{`Loading${dots}`}</div>
          </div>
        )}
        {(loading_1 || loading_2 ||loading_3 || loading_3 === undefined ) && (
          <div className="floating-box">
            <span>Test 3</span>
            <div className="loading">{`Loading${dots}`}</div>
          </div>
        )}
        </div>
        <div className="testing-container-1">
        {  results_1 !== undefined && results_1.length() && (
          <div className="floating-box">
            <span>Test 1</span>
            <div className="success">✔️</div>
          </div>
        )}
        {  results_2 !== undefined && results_2.length() && (
          <div className="floating-box">
            <span>Test 2</span>
            <div className="success">✔️</div>
          </div>
        )}
        { results_3 !== undefined &&  results_3.length() && (
          <div className="floating-box">
            <span>Test 3</span>
            <div className="success">✔️</div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default TestingComponent;

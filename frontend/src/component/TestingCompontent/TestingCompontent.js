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
  const { loading_1, result_1 } = useSelector((state) => state.test_1);
  const { loading_2, result_2 } = useSelector((state) => state.test_2);
  const { loading_3, result_3 } = useSelector((state) => state.test_3);
  const [dots, setDots] = useState('.');
  useEffect(()=>{
  dispatch(test_File_Download());
  dispatch(OPEN_PORT_TEST());
  dispatch(test_3()); 
  } , []) ; 

  useEffect(() => {
    if (!loading_1 && !loading_2 && !loading_3) {
      // All tests have finished loading
      setTimeout(() => navigate('/result', { state: { id: 1, name: 'sabaoon' } }), 6000);
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
      <div className='loading-board'></div>
      <div className="testing-container">
        {(loading_1    || loading_1 === undefined ) && (
          <div className="floating-box">
            <span>Test 1</span>
            <div className="loading1">{`Loading${dots}`}</div>
          </div>
        )}
        {( loading_2   || loading_2 === undefined ) && (
          <div className="floating-box">
            <span>Test 2</span>
            <div className="loading1">{`Loading${dots}`}</div>
          </div>
        )}
        {( loading_3 || loading_3 === undefined ) && (
          <div className="floating-box">
            <span>Test 3</span>
            <div className="loading1">{`Loading${dots}`}</div>
          </div>
        )}
        </div>
        <div className="testing-container">
        {  result_1 !== undefined && result_1.length && (
          <div className="floating-box">
            <span>Test 1</span>
            <div className="loading1">✔️</div>
          </div>
        )}
        {  result_2 !== undefined && result_2.length && (
          <div className="floating-box">
            <span>Test 2</span>
            <div className="loading1">✔️</div>
          </div>
        )}
        { result_3 !== undefined &&  result_3.length && (
          <div className="floating-box">
            <span>Test 3</span>
            <div className="loading1">✔️</div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default TestingComponent;

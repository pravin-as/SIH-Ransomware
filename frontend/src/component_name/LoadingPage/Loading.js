import React, { useState, useEffect } from 'react';
import Loader from "../Loader/Loader.js"
import "./Loading.css"  ;

const CheckOnLoading = () => {
  const [completedTests, setCompletedTests] = useState([]);

  useEffect(() => {
    
    const simulateTestCompletion = async () => {

      // Simulated test names
      const testNames = [
        'Initial Compromise Tests',
        'Lateral Movement Tests',
        'Data Loss/Exfiltration Tests',
      ];

      for (const testName of testNames) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setCompletedTests((prevTests) => [...prevTests, testName]);

      }
    };

    simulateTestCompletion();
  }, []);

  return (
    <div className='ticks'>
      <Loader/>
      <ul>
        {completedTests.map((testName, index) => (
          <li key={index}>
            {testName} <span style={{ color: 'green' }}>✔</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckOnLoading;

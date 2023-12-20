import React, { useEffect } from 'react'
import { useSelector } from 'react-redux' ; 
import './Results.css'


const Results = () => {   
  const  {result_1}  = useSelector((state)=>state.test_1)  ; 
  const  {result_2} = useSelector((state)=>state.test_2)  ; 
  const  {result_3} = useSelector((state)=>state.test_3)  ;    

   
  const data = [
    { testSno: 1, testName: 'Test 1 File Download', result: (result_1[0]? 'True': 'False')},
    { testSno: 2, testName: 'Test 2 Encrypted File Download', result:  (result_1[1]? 'True': 'False') },
    { testSno: 3, testName: 'Test 3 Port 445 testing', result:  (result_2[0]? 'True': 'False') },
    { testSno: 4, testName: 'Test 4 RDP port 3389 testing', result:  (result_2[1]? 'True': 'False') },
    { testSno: 5, testName: 'Test 5 Access New Domain', result:  (result_3[0]? 'True': 'False')},
  ];

  return (
    <div className="sexy-table-container">
    <table className="sexy-table">
      <thead>
        <tr>
          <th>Test Sno</th>
          <th>Test Name</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.testSno}>
            <td>{entry.testSno}</td>
            <td>{entry.testName}</td>
            <td>{entry.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Results

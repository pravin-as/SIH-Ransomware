import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NmapAction } from '../../../actions/NmapAction';
import './NMap.css'; // Import the CSS file for styling
import Loader from '../../Loader/Loader';
const NMap = () => {
  const dispatch = useDispatch();

  const { loading, nmap } = useSelector((store) => store.nmap);

  useEffect(() => {
    dispatch(NmapAction());
  }, [] );

  return (
    <div className="nmap-container">
      <h2>Detected Vulnerabilities</h2>
      {loading || nmap ===undefined ? (
        <p> <Loader/></p>
      ) : (
        <ul>
          {nmap.map((vuln, index) => (
            <li key={index}>{vuln}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NMap;

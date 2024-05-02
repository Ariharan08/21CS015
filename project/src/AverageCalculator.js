import React, { useState } from 'react';
import axios from 'axios';
import './AverageCalculator.css'; 

function AverageCalculator() {
  const [numberType, setNumberType] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/numbers/${numberType}`);
      const { windowPrevState, windowCurrState, numbers, avg } = response.data;
      setNumbers(numbers);
      setAverage(avg);
    } catch (error) {
      console.error('Error fetching numbers:', error.message);
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Average Calculator</h1>
      <div className="input-container">
        <select className="number-type" value={numberType} onChange={(e) => setNumberType(e.target.value)}>
          <option value="">Select Number Type</option>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
        <button className="fetch-button" onClick={fetchNumbers}>Fetch Numbers</button>
      </div>
      <div className="result-container">
        <h2 className="numbers">Numbers: {numbers.join(', ')}</h2>
        <h2 className="average">Average: {average}</h2>
      </div>
    </div>
  );
}

export default AverageCalculator;

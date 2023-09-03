 import React, { useState } from 'react';

function AddNumbers() {
  // Define state variables to store the input values and the result
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  

  // Event handler for the first input
  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  // Event handler for the second input
  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  // Event handler for the button click
  const handleAddClick = () => {
    const sum = num1 * num2;
    setResult(sum);
  };

  return (
    <div>
      <h2>Add Numbers</h2>
      <label htmlFor="num1">Enter the first number: </label>
      <input type="number" id="num1" value={num1} onChange={handleNum1Change}/>

      <label htmlFor="num2">Enter the second number: </label>
      <input type="number" id="num2" value={num2} onChange={handleNum2Change}/>

      <button onClick={handleAddClick}>Add</button>

      <p>Result: {result}</p>
    </div>
  );
}

export default AddNumbers;


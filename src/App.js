import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [firstNum, setFirstNum] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNum, setSecondNum] = useState('');

  const handleButtonClick = (value) => {
    if (value >= '0' && value <= '9') {
      setDisplay(display + value);
    } else if (value === 'C') {
      setDisplay('');
      setFirstNum('');
      setOperator('');
      setSecondNum('');
    } else if (value === '=') {
      setSecondNum(display);
      const result = calculate(firstNum, operator, display);
      setDisplay(result);
      setFirstNum('');
      setOperator('');
      setSecondNum('');
    } else {
      setFirstNum(display);
      setOperator(value);
      setDisplay('');
    }
  };

  const calculate = (num1, op, num2) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (op === '+') return n1 + n2;
    if (op === '-') return n1 - n2;
    if (op === '*') return n1 * n2;
    if (op === '/') return n2 !== 0 ? n1 / n2 : 'Error';
    return '';
  };

  return (
    <div className="calculator">
      <input type="text" id="display" value={display} readOnly />
      <div id="buttons">
        <div className ='numbers'>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
         <div className='operators'>
        
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        
         </div>
        </div>
    </div>
  );
}

export default App;
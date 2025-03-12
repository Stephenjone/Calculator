import React, { useState } from 'react';
import './Calculator.css';


function Calculator() 
{
  const[expression, setExpression] =useState('');

  const handleClick=(value)=>{
    setExpression(expression+value);
  }


  const calculateResult=()=>{
    try{
      const result = eval(expression);
      setExpression(result.toString());
    }
    catch(error)
    {
      setExpression('Error');
    }
  }

  const clearDisplay=()=>{
    setExpression('');
  }


  return (
    <div className='calculator'>
      <input type="text"
      className='display' 
      value={expression}
      readOnly/>


      <div className='buttons'>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => calculateResult('=')}>=</button>
        <button onClick={() => clearDisplay('AC')}>AC</button>
      </div>
    </div>
  )
}


export default Calculator;
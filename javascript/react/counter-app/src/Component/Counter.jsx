import {useState} from 'react'

const Counter = () => {

         let count = 0;

         const [counter, setCounter] =useState(count);


//increament btn function
const increment = () =>{
         setCounter(counter +1)
};

//decreament btn function
const decrement = () =>{
         setCounter(counter -1)
};
//double-button function
const double = () =>{
         setCounter(counter *2)
};

//reset button function
const reset = () =>{
         setCounter(0)
};

//square button function
const square = () =>{
         setCounter(counter*counter)
};

//squareRoot button function
const squareRoot = () =>{
         setCounter(Math.sqrt(counter))
};


  return (
    <div>
 <h1>MY FIRST REACT COUNTER APPLICATION</h1>
 <div className='container'>
  <div className='counter'>
       <button className='btn'onClick={decrement}>-</button>
        <span id='count'>{counter} </span>
        <button className='btn'onClick={increment}>+</button>
       </div>
<button className='btn' onClick={double}>DoubleX2</button>
<button className='Reset'onClick={reset}>Reset</button>
<button className='btn'onClick={square}>Square</button>
<button className='Reset'onClick={squareRoot}>SquareRoot</button>

         </div>
      
    </div>
  )
}

export default Counter;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,payload } from './actions';


export const Hello = () => {
  // const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const counterRedux = useSelector(state=> state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(payload(5))}>+5</button>
      <p>You've pressed the button {counterRedux} times.</p>
    </div>
  );
};
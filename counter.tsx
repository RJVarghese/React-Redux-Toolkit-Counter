import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from './features/counter/counterSlice';
const Counter = (props) => {
  const count = useSelector((state: any) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementBy(10));
        }}
      >
        Increment 10
      </button>
    </div>
  );
};
export default Counter;
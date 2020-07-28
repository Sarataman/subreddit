import React from 'react';
import {useSelector} from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
    </div>
  );
}

export default App;

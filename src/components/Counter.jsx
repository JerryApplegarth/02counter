import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  let counter = 0;
  const [count, setCount] = useState(counter);

  const addValue = () => {
    // using a callback function twice is a bad practice
    // but it will now increase the counter by 2
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const subValue = () => {
    // here the counter will decrease by 3
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };
  const resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter">
        <h2 className="counter-h2">Counter: {count}</h2>
        <button
          className="counter-btn"
          onClick={addValue}
        >
          Add Value
        </button>
        <button
          className="counter-btn"
          onClick={subValue}
        >
          Remove Value
        </button>
        <button
          className="counter-btn"
          onClick={resetValue}
        >
          Reset
        </button>
        <p className="counter-p">This is my counter</p>
        <p className="counter-p">It is set at {count}</p>
      </div>
    </>
  );
};

export default Counter;

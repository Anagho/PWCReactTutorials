import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  // Array Destructuring
  const [count, setCount] = useState(0);
  const [desc, setDesc] = useState('');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me to increase by 1
      </button>
      {/* <button onClick={() => setCount(count - 1)}>
        Click me to decrease by 1
      </button>
      <button onClick={() => setCount(0)}>Click me to reset</button>

      <Button text="Like me" mycolor="red" />
      <Button text="Hate me" mycolor="yellow" /> */}

      {/* <input type='text' onChange={(e) => setDesc(e.target.value)} />
      <p>{desc}</p> */}


    </div>
  );
};

export default Counter;

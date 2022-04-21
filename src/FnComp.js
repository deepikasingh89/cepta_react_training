import React, { useState } from "react";

const FnComp = () => {
  const [count, setCount] = useState(0); // usestate is a hookk
  
  //count- state variable not an obj
  // 0-  defining type of state variable and initializing its value
  //setcount- is a menthod to update state variable.
    // state variable can be manipulated just by its own menthod
    //menthod cant update anything else

  const increase = () => {
    console.log("incrase....");
    setCount(count=>count+1);
  };
  const decrease = () => {
    console.log("decrease....");
     setCount(count => count -1);
  };
  return (
    <>
      <div>This is a functional component</div>
      <div>{count}</div>
      <button onClick={increase}>Incr</button>
      <button onClick={decrease}>Decr</button>
    </>
  );
};

export default FnComp;

/*React Hooks
closure - the inner and lazcical variable are persitant.
use keywork. if there are hooks.
extra method/ component injecting in component.
state - useState  //to implement functionlity in function




*/

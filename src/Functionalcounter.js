import React, { useState } from "react";

const Functionalcounter = () => {
  const [number, setNumber] = useState(0);

  const Increasenum = () => {
    setNumber(number + 1);
  };
  return (
    <div className="App">
      <h1>Functional Even faster Fingers</h1>
      <h1>{number}</h1>
      <button onClick={Increasenum}>Increase</button>
      <button>Decrease</button>
    </div>
  );
};

export default Functionalcounter;

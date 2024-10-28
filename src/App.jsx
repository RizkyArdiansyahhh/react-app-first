// eslint-disable-next-line react-refresh/only-export-components
import { useState } from "react";
import MyButton from "./assets/components/MyButton";
import Count from "./assets/components/Count";

function App() {
  const [number, setNumber] = useState(0);

  function add() {
    setNumber(number + 1);
  }
  function min() {
    setNumber(number - 1);
  }
  function reset() {
    setNumber(0);
  }

  return (
    <div>
      <MyButton content="-" even={min} disabled={number < 0 || number > 10} />
      <Count number={number < 0 || number > 10 ? "done!" : number} />
      <MyButton content="+" even={add} disabled={number < 0 || number > 10} />
      <MyButton
        content="Reset"
        even={reset}
        disabled={number < 0 || number > 10 ? false : true}
      />
    </div>
  );
}

export default App;

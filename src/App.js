import MainBox from "./Components/MainBox";
import './App.css';
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);
  const HandleClick = ev => {
    ev = <MainBox />
    const newBoxes = [ev, ...boxes];
    setBoxes(newBoxes)
  }
  return (
    <div className="App">
      <button onClick={HandleClick}>Add Box</button>
      {boxes}
    </div>
  );
}

export default App;

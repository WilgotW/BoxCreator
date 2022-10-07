import MainBox from "./Components/MainBox";
import './App.css';
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [objectType, setObjectType] = useState("Box");

  const HandleClick = ev => {
    ev = <MainBox objectType={objectType} />
    const newBoxes = [ev, ...boxes];
    setBoxes(newBoxes)
  }

  const HandleSelect = ev => {
    const selected = ev.target.value;
    setObjectType(selected);
  }
  return (
    <div className="App">
      <button onClick={HandleClick}>Add Box</button>
      <label>
        <select onChange={HandleSelect}>
          <option value="Box">Box</option>
          <option value="Circle">Circle</option>
        </select>
      </label>
      {boxes}
    </div>
  );
}

export default App;

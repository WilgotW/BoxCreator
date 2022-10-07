import MainBox from "./Components/MainBox";
import './App.css';
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [objectType, setObjectType] = useState("Box");

  const HandleClick = () => {
    const newBoxes = [...boxes, {objectType: objectType, id: boxes.length}];
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
      {boxes.map(box => <MainBox objectType={box.objectType} id={box.id} boxes={boxes} setBoxes={setBoxes}/>)}
    </div>
  );
}

export default App;

import MainBox from "./Components/MainBox";
import './App.css';
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [objectType, setObjectType] = useState("Box");

  const HandleClick = () => {
    const newBoxes = [...boxes, {objectType: objectType, id: Math.floor(Math.random() * 1000)}];
    setBoxes(newBoxes)
  }
  
  const deleteItem = id =>{
    const newArr = boxes.filter(ob => ob.id !== id)
    setBoxes([...newArr]);
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
      {boxes.map(box => <MainBox objectType={box.objectType} id={box.id} deleteThis={deleteItem}/>)}
    </div>
  );
}

export default App;

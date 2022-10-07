import React, { useState } from 'react'

export default function RgbPicker({setRgb}) {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const HandleChange = ev => {
        const currentColor = ev.target.name;
        const currentValue = ev.target.value;
        currentColor == "red" ? setRed(currentValue) : (currentColor == "green" ? setGreen(currentValue) : setBlue(currentValue));
        const rgb = "rgb(" + red + "," + green + "," + blue + ")";
        setRgb(rgb)
    }
  return (
    <div>
        <input type="range" min="0" max="200" onChange={HandleChange} name="red"/>
        <input type="range" min="0" max="200" onChange={HandleChange} name="green"/>
        <input type="range" min="0" max="200" onChange={HandleChange} name="blue"/>
    </div>
  )
}

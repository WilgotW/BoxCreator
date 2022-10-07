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
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{ display: "flex"}}>
                <input type="range" min="0" max="255" onChange={HandleChange} name="red"/>
                <div style={{width: "20px", height: "20px", background: "rgb(" + red + ", 0, 0)", borderRadius: "100px"}}></div>
            </div>
            <div style={{ display: "flex"}}>
                <input type="range" min="0" max="255" onChange={HandleChange} name="green"/>
                <div style={{width: "20px", height: "20px", background: "rgb(0, "+green+", 0)", borderRadius: "100px"}}></div>
            </div>
            <div style={{ display: "flex"}}>
                <input type="range" min="0" max="255" onChange={HandleChange} name="blue"/>
                <div style={{width: "20px", height: "20px", background: "rgb(0, 0, "+blue+")", borderRadius: "100px"}}></div>
            </div>
            
            
        </div>
    </div>
  )
}

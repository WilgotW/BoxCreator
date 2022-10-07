import React, { useEffect, useState } from 'react'
import Box from './Box';
import RgbPicker from './RgbPicker';
import Slider from './Slider';

export default function MainBox({objectType, id, setBoxes, boxes}) {
    const [width, setWidth] = useState("50px");
    const [height, setHeight] = useState("50px");
    const [rgb, setRgb] = useState("rgb(0,0,0)");

    const DeleteThis = () => {
        const newArr = boxes.filter(ob => ob.id != id)
        setBoxes(newArr);
    }
    
  return (
    <div key={id} style={{display: "flex", justifyContent:"center",  background: "rgb(227, 227, 227)", margin: "20px"}}>
        <div style={{display: "flex", justifyContent: "center", flexDirection:"column", width: "100vw"}}>
            <h1>{"#"+id}</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Slider setValue={setWidth} />
                {objectType == "Box" &&
                    <Slider setValue={setHeight} />
                }
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>    
                <h2>{width} {objectType == "Box" && "x "+ height}</h2>
            </div>
            <div>
                <RgbPicker setRgb={setRgb}/>
                <button style={{color: "red"}} onClick={DeleteThis}>Delete This</button>
            </div>
            
            <Box width={width} height={height} rgb={rgb} objectType={objectType}/>
        </div>
    </div>
  )
}

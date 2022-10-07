import React, { useEffect, useState } from 'react'
import Box from './Box';
import Slider from './Slider';

export default function MainBox() {
    const [width, setWidth] = useState("50px");
    const [height, setHeight] = useState("50px");
    
  return (
    <div style={{display: "flex", justifyContent:"center"}}>
        <div style={{display: "flex", justifyContent: "center", flexDirection:"column", width: "100vw"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Slider setValue={setWidth} />
                <Slider setValue={setHeight} />
            </div>
        
            <div style={{display: "flex", justifyContent: "center"}}>    
                <h2>{width} x {height}</h2>
                
            </div>
            <Box width={width} height={height}/>
        </div>
    </div>
  )
}

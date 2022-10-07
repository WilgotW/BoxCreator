import React from 'react'

export default function Box({width, height, rgb, objectType}) {
  return (
    <div key={Math.random() * 1000} style={{display: "flex", justifyContent: "center"}}>
        <div style={{
            width: width,
            height: objectType == "Box" ? height : width  ,
            background: rgb,
            borderRadius: objectType == "Box" ? "0px" : "1000px"
          }}>    
        </div>
    </div>
  )
}

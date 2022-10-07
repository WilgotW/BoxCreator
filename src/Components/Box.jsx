import React from 'react'

export default function Box({width, height}) {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{
            width: width,
            height: height,
            background: "red"}}>    
        </div>
    </div>
  )
}

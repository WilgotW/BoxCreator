import React from 'react'

export default function Box({width, height, rgb}) {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{
            width: width,
            height: height,
            background: rgb}}>    
        </div>
    </div>
  )
}

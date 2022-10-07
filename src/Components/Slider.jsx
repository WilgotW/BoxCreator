import React from 'react'

export default function Slider({setValue}) {
    const ConvertToPixels = val => val.toString() + "px";
    const HandleInput = e => {
        const val = ConvertToPixels(e.target.value)
        setValue(val);
    }
  return (
    <input type="range" min="1" max="500" onChange={HandleInput} />
  )
}

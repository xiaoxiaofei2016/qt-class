import React, { useContext } from 'react';
import { UPDATE_COLOR, ColorContext } from './color';

function Buttons() {
  console.log(useContext(ColorContext))
  const { dispatch } = useContext(ColorContext)
  return (
    <div>
      <button onClick={() => {
        dispatch({type: UPDATE_COLOR, color: 'red'})
      }}>红色</button>
      <button onClick={() => {
        dispatch({type: UPDATE_COLOR, color: 'yellow'})
      }}>黄色</button>
    </div>
  )
}

export default Buttons
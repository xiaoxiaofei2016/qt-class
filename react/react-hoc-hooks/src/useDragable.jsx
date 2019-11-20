import React, { useState } from 'react'

function useDragable() {
  let [ left, setLeft ] = useState(0)
  let [ top, setTop ] = useState(0)

  return {
    style: {
      left,
      top
    }
  }
 
}
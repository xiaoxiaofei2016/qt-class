import React, { useRef, useState, useEffect } from 'react';


function Example1() {
  const input = useRef(null)
  const [ inputel, setInput ] = useState('hello')

  const handleClick = () => {
    console.log(input)
    input.current.value = 'hello'
  }

  const text = useRef(null)
  useEffect(() => {
    text.current = inputel
    console.log(inputel)
  })

  return (
    <>
      <input type="text" ref={input}/>
      <button onClick={handleClick}>在input上展示文字</button>
      <input type="text" value={inputel} ref={text} onChange={(e) => {setInput(e.target.value)}}/>
    </>
  )
}

export default Example1
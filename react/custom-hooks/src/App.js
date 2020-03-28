import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input1 from './input1.jsx'
import withWidth from './WidthHoc.jsx';

/**
 * useState
 * useEffect
 * useMemo 缓存一个计算过后的值
 * useCallback 缓存一个函数
 * useReducer dispatch -> action -> reducer -> state
 */

function Width({ windowWidth }) { // 函数组件props通过应参接收
  return (
    <h2>{ windowWidth }</h2>
  )
}

const WindowWidth = withWidth(Width)

// hooks
function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  const handleSize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => { // 函数组件模拟生命周期didmount
    window.addEventListener('resize', handleSize)
    return () => { // 模拟unmountj,
      window.removeEventListener('resize', handleSize)
    }
  })

  return width
}

function Width2() {
  const width = useWidth()
  // width
  return (
    <h3>{width}</h3>
  )
}


function App() {
  return (
    <div className="App">
      <Input1/>
      <WindowWidth/>
      <Width2/>
    </div>
  );
}

export default App;

import React, { useMemo, useState, useCallback, useEffect } from 'react'; // useMemo缓存结果,useCallback缓存函数;useEffect模拟生命周期
import logo from './logo.svg';
import './App.css';

let set1 = new Set() // Set去重,用于验证用了useCallback,若没有变化,函数还是以前的
let set2 = new Set()
// wrapper hell
// class App extends React.Component {}
// reactRouter(connect(App))
// use 
function App() {
  let [ count, setCount ] = useState(0) // 0是默认值
  let [ time, setTime ] = useState(0)

  // const calculate = count + ',' + time;
  const calculate = useMemo(() => count + ',' + time, [count]) // 比较上一次和这次的count是否一样,若count变化了,calculate才会变化
  const fn1 = () => count + ',' + time
  const fn2 = useCallback(() => count + ',' + time, [count])
  set1.add(fn1)
  set2.add(fn2)

  // 模拟生命周期
  useEffect(() => {
    console.log(123)
    return () => {
      // unMount 卸载
      // 每次组件重新渲染都会执行这个
      // clearTimeout()
      console.log('卸载')
    }
  })
  return (
    <div>
      <div>time: {time}</div>
      <div>count: {count}</div>
      <div>calculate: {calculate}</div>
      <div>{set1.size}</div>
      <div>{set2.size}</div>
      <button onClick={() => {
        setCount(++count)
      }}>count</button>
      <button onClick={() => {
        setTime(Date.now())
      }}>time change</button>
    </div>
  )
}

export default App;

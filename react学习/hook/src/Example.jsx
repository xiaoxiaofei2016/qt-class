import React, { Component } from 'react';
import { useReducer } from 'react';

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch(action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0) // 第二个参数为初始值

  return (
    <>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => {dispatch('add')}}>Increment</button>
      <button onClick={() => {dispatch('sub')}}>Decrement</button>
    </>
  )
}

export default ReducerDemo


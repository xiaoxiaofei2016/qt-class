import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {
  const [ size, setSize ] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => { // 缓存方法
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

function Example2() {
  const size = useWinSize()
  return (
    <div>页面size:{size.width}x{size.height}</div>
  )
}

export default Example2
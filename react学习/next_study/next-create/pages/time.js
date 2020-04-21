import React, { useState } from 'react';
// import moment from 'moment' 日期处理类库
import dynamic from 'next/dynamic'

const Jspang = dynamic(import('./jspang')) // 组件的按需引入

function Time() {
  const [nowTime, setTime] = useState(Date.now())

  const changeTime = async () => {
    const moment = await import('moment') // 按需引入
    setTime(moment.default(Date.now()).format())
  }

  return (
    <>
      <div>显示时间为：{nowTime}</div>
      <div><button onClick={changeTime}>改变时间格式</button></div>
      <Jspang></Jspang>
    </>
  )
}

export default Time
import { useState } from "react"

function Jspang() {

  const [color, setColor] = useState('blue')
  const changeColor = () => {
    setColor(color == 'blue'? 'red' : 'blue')
  }
  return (
    <>
      <button onClick={changeColor}>改变颜色</button>
      <div className="jspang">技术胖的前端课程</div>
      <div>技术胖的前端课程</div>

      <style jsx>
        {
          `
            .jspang{color: ${color}}
          `
        }
      </style>
    </>
  )
}

export default Jspang
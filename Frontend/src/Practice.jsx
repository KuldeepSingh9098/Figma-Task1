import React, { useState } from 'react'
import "./Practice.css"
const Practice = () => {
   const [active, setActive] = useState(true);
   const [count, setCount]   = useState(0)
  const handleChangeColor = ()=>{
             setCount(count+1)
             setActive(!active)
             console.log(active)
  }
  return (
       <>
    <div type='submit' className={active? 'cfc': 'cfc2'} onClick={handleChangeColor}>Test</div> 
  {count}
    </>
  )
}

export default Practice








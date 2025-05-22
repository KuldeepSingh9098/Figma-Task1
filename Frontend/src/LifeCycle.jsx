import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
  const [count, setCount] = useState(null);
  
  const handleIncrement =  ()=>{
    setCount(count+1);
  }
useEffect(()=>{
  //componentDidmount
      console.log("Component Mounted")
}, [])

useEffect(()=>{
  //componentDidupdate
    console.log("component updated")
},[count])

useEffect(()=>{
        //componetwillunmount
      return(
        alert("component unmount")
      )
},[])
  return (
    <div>
 <button type='submit' onClick={handleIncrement}>Count</button>
    </div>
  )
}

export default LifeCycle

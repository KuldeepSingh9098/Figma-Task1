import React, { useState } from "react";
import Child from "./Child"
function Parent(){
     const[message, setMessage] = useState()
    const [didisms, setDidiSms] = useState()
    const handleReceived = (ChildSms)=>{
              setMessage(ChildSms)
    }
    const handleDidiSMSReceived = (ChildSms)=>{
                setDidiSms(ChildSms)
    }

    return(
         <div>
            <h1>I am Parent oF , u Want to introduce MY SELF  </h1>
             <p>{message}</p>
             <h4>HERE IS DIDI MESSAGE FOR YOU SIR</h4>
             <Child data={handleReceived} didisms={handleDidiSMSReceived} />
             <h6>{didisms}</h6>
         </div>
    )
}export default Parent;
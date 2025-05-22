import React from "react";
function Child({data, didisms}){
 
  const handleSendData = ()=>{
            data("Yes Dad offcourse, Hello Everyone, He is my Dad, He is Such a Best father ") 
  }

  const handleSendDidiSms = ()=>{
              didisms("Hello Pagalchatte , Kya kar rahe ho, Train ticket ho gayi ya nahi")    
  }
  
   return(
    <>
             
        <div>

          <button type="submit" onClick={handleSendData}>Send Data</button>
          <button type="submit" onClick={handleSendDidiSms}>Send Didi Message</button>
         
        </div>
  </>
   )
}export default Child
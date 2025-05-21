import React from 'react'
import FormVersion4 from "./FormVersion4"
import {Link, Route, Routes,} from "react-router-dom";


const Navigation = () => {
  return (
    <>

    <div>
        <Link to="./Home"><button type='submit'  >Save</button></Link>
       
    </div>
    <div>
        <Routes>
            <Route path="/Home" element={<FormVersion4/>}></Route>
         
        </Routes>
    </div>
    
    </>
  )
}

export default Navigation

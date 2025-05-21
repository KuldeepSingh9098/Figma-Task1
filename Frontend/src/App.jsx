import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormRouting2 from './FormRouting2'
import FormVersion4Copy2 from './FormVersion4Copy2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormRouting2/>}></Route>
        <Route path='/userlist' element={<FormVersion4Copy2/>}></Route>
      </Routes>
     </BrowserRouter>
       
    </>
  )
}

export default App

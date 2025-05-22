import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormRouting2 from './FormRouting2'
import FormVersion4Copy2 from './FormVersion4Copy2'
import UserForm from './Component/UserForm'
import UserList from './Component/UserList'
import UserForm2 from './Comp2/UserForm2'
import UserList2 from './Comp2/UserList2'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserForm2/>}></Route>
        <Route path='/:id' element={<UserForm2/>}></Route>
        <Route path='/userlist2' element={<UserList2/>}></Route>
      </Routes>
     </BrowserRouter>
       
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import FormVersion2 from './FormVersion2.jsx'
import FormVersion3 from './FormVersion3.jsx'
import FormVersion4 from './FormVersion4.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import FormRouting from './FormRouting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*     
      <FormVersion3/>
     <FormVersion4/> */}
     <App/>
  </StrictMode>
//   <BrowserRouter>
// <FormRouting/>
// <Navigation/>
//   </BrowserRouter>
)

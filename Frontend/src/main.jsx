import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx'
import FormVersion2 from './FormVersion2.jsx'
import FormVersion3 from './FormVersion3.jsx'
import FormVersion4 from './FormVersion4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Form /> */}
     {/* <FormVersion2/> */}
     {/* <FormVersion3/> */}
     <FormVersion4/>
  </StrictMode>,
)

import React from 'react'
import {Formik,Form, Field} from  "formik"

const Formwik = () => {
  return (
    <div>
     <Formik
     initialValues={{name: "", age:"", work:""} }
     onSubmit={(values)=>{
                console.log("form submitted", values)
     }}
     >
      <Form>
      <label>Name</label>
       <Field name="name" id="name" placeholder="Enter Your Name"/>
       <label>Age</label>
       <Field name="age" id="age" placeholder="Enter Your Name"/>
       <label>Work</label>
       <Field name="work" id="work" placeholder="Enter Your Name"/>
       <button type='submit' >Submit</button>
      </Form>

     </Formik>
      
    </div>
  )}


export default Formwik

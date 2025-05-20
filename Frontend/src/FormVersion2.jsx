import React, { useEffect, useState } from "react";
import './Form.css'
function FormVersion2(){
const[data, setData] = useState({
         firstname: " ",
         lastname: " ",
         email: " ",
         gender: " ",
         hobbies: " ",
         statuss: " ",
         description: " "
})

const [arraydata, setArrayData] = useState([])

// useEffect(()=>{
//          var Pdata = localStorage.getItem("data")
//          var Pdatatwo = JSON.parse(Pdata)
//          setData(data)
        
//         },[])

const handleFormData = (e)=>{
      setData({
        ...data,
            [e.target.name]: e.target.value
      })      
}

console.log(data)

const handleSaveButton = (e)=>{
          
    localStorage.setItem("data", JSON.stringify(data))
       sessionStorage.setItem("data", JSON.stringify(data))
     e.preventDefault()
       setArrayData([data])
       
     
}
console.log(arraydata)


     return(
        <>
         <form>
          <label>FirstName</label> 
          <input type="text" name="firstname" placeholder="Enter your firstname" onChange={handleFormData} value={data.firstname}/>
          <br/>
          <br/>
          <label>LastName</label> 
          <input type="text" name="lastname"  placeholder="Enter your lastname" onChange={handleFormData} value={data.lastname}/>
          <br/>
          <br/>
          <label>Email</label> 
          <input type="email" name="email"  placeholder="Enter your email" onChange={handleFormData} value={data.email}/>
          <br/>
           <br/>
          <label>Gender:</label> 
          <lable>
            Male:
          <input type="radio" name="gender" onChange={handleFormData} value="male" checked={data.gender=="male"} />
          </lable>
          <label>
            Female: 
          <input type="radio" name="gender"  onChange={handleFormData} value="female" checked={data.gender=="female"}/>
          </label>
          <br/>
           <br/>
          <label>Hobbies:</label> 
          <label>Reading:</label>
         <input type="checkbox" name="hobbies" onChange={handleFormData} value="Reading" checked={data.hobbies=="Reading"}/>
            <label>Painting:</label>
             <input type="checkbox" name="hobbies" onChange={handleFormData} value="Painting" checked={data.hobbies=="Painting"}/>
            <label>Coading:</label>
             <input type="checkbox" name="hobbies" onChange={handleFormData} value="Coading" checked={data.hobbies=="Coading"}/>
            <br/>
             <br/>
          <label>Status</label> 
          <select onChange={handleFormData} name="statuss">
            <option value="">Select</option>
            <option value="Active" selected={data.statuss=="Active"}>Active</option>
            <option value="Inactive" selected={data.statuss=="Inactive"} >Inactive</option>
          </select>
         
            <br/>
             <br/>
          <label>Description:</label> 
          <input type="textarea" placeholder="Enter your firstname" style={{width: "200px", height: "100px"}} onChange={handleFormData} name="description" value={data.description}/>
           <br/>
           <br/>
            <button type="submit" onClick={handleSaveButton}>Save</button>
         </form>
         <div>
            <center>
                {
                    arraydata.map((userlist)=>(
                              <table>
                                <tr >
                                    <th colSpan={2}>User Details</th>
                                </tr>
                                <tr>
                                    <th>FirstName</th>
                                    <td>{userlist.firstname}</td>
                                </tr>
                                <tr>
                                    <th>LastName</th>
                                    <td>{userlist.lastname}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{userlist.email}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{userlist.gender}</td>
                                </tr>
                                <tr>
                                    <th>Hobbies</th>
                                    <td>{userlist.hobbies}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{userlist.statuss}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{userlist.description}</td>
                                </tr>
                              </table>
                    ))
                }
            </center>
         </div>

        </>
     )
}export default FormVersion2;
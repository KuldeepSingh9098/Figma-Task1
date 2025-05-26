import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import UserForm2 from "../Comp2/UserForm2";
function UserList2() {
  const navigate = useNavigate();

  const [arraydata, setArrayData] = useState([]);
 
  useEffect(() => {
    var Pdata = localStorage.getItem("data");
    var Pdatatwo = JSON.parse(Pdata);
    setArrayData(Pdatatwo);
    // setData(Pdatatwo[Pdatatwo.length - 1]);
  }, []);

  const handleEditButton = (i) => {
         
           navigate(`/${i}`)
   
  };

  const handleDeleteButton = (i) => {
    var Pdata = localStorage.getItem("data");
    var Pdatatwo = JSON.parse(Pdata);
    let Pdatatwo2 = Pdatatwo.filter((userlist, index) => {
      return index + 1 !== i;
    });
    setArrayData(Pdatatwo2);
    localStorage.setItem("data", JSON.stringify(Pdatatwo2));
  };

  const handleReturnAgain = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <center>
          <button type="submit" onClick={handleReturnAgain}>
            UserForm
          </button>
          <table>
            <tr>
              <th colSpan={7}>User Details</th>
            </tr>

            <tr>
              <tr>
                <th>Index</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Status</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
              {arraydata.map((userlist, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{userlist.firstname}</td>
                  <td>{userlist.lastname}</td>
                  <td>{userlist.email}</td>
                  <td>{userlist.gender}</td>
                  <td>{userlist.hobbies}</td>
                  <td>{userlist.statuss}</td>
                  <td>{userlist.description}</td>
                  <td>
                    <button
                      style={{ border: "2px solid blue", color: "blue" }}
                      onClick={() => {
                        handleEditButton(index + 1);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      style={{ border: "2px solid red", color: "red" }}
                      onClick={() => {
                        handleDeleteButton(index + 1);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tr>
          </table>
        </center>
      </div>
    </>
  );
}
export default UserList2;

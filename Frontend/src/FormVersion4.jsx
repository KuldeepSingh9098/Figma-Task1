import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function FormVersion4() {
  const [data, setData] = useState({
    firstname: " ",
    lastname: " ",
    email: " ",
    gender: " ",
    hobbies: " ",
    statuss: " ",
    description: " ",
  });

  const [arraydata, setArrayData] = useState([]);
  const [editindex, setEditIndex] = useState(null);
  

  useEffect(() => {
    var Pdata = localStorage.getItem("data");
    var Pdatatwo = JSON.parse(Pdata);
    setArrayData(Pdatatwo);
    // setData(Pdatatwo[Pdatatwo.length - 1]);
  }, []);

  const handleFormData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveButton = (e) => {
    const upDatedData = [...arraydata];

    if (editindex == null) {
      upDatedData.push(data);
    } else {
      upDatedData[editindex - 1] = data;
    }
    setArrayData(upDatedData);
    localStorage.setItem("data", JSON.stringify(upDatedData));
    sessionStorage.setItem("data", JSON.stringify(upDatedData));
    e.preventDefault();
  };

  const handleEditButton = (i) => {
    var Pdata = localStorage.getItem("data");
    var Pdatatwo = JSON.parse(Pdata);

    let Pdatatwo2 = Pdatatwo.filter((userlist, index) => {
      return index + 1 == i;
    });
    setData(Pdatatwo2[0]);
    setEditIndex(i);

  };

  return (
    <>
      <form>
        <label>FirstName</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your firstname"
          onChange={handleFormData}
          value={data.firstname}
        />
        <br />
        <br />
        <label>LastName</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter your lastname"
          onChange={handleFormData}
          value={data.lastname}
        />
        <br />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleFormData}
          value={data.email}
        />
        <br />
        <br />
        <label>Gender:</label>
        <lable>
          Male:
          <input
            type="radio"
            name="gender"
            onChange={handleFormData}
            value="male"
            checked={data.gender == "male"}
          />
        </lable>
        <label>
          Female:
          <input
            type="radio"
            name="gender"
            onChange={handleFormData}
            value="female"
            checked={data.gender == "female"}
          />
        </label>
        <br />
        <br />
        <label>Hobbies:</label>
        <label>Reading:</label>
        <input
          type="checkbox"
          name="hobbies"
          onChange={handleFormData}
          value="Reading"
          checked={data.hobbies == "Reading"}
        />
        <label>Painting:</label>
        <input
          type="checkbox"
          name="hobbies"
          onChange={handleFormData}
          value="Painting"
          checked={data.hobbies == "Painting"}
        />
        <label>Coading:</label>
        <input
          type="checkbox"
          name="hobbies"
          onChange={handleFormData}
          value="Coading"
          checked={data.hobbies == "Coading"}
        />
        <br />
        <br />
        <label>Status</label>
        <select onChange={handleFormData} name="statuss">
          <option value="">Select</option>
          <option value="Active" selected={data.statuss == "Active"}>
            Active
          </option>
          <option value="Inactive" selected={data.statuss == "Inactive"}>
            Inactive
          </option>
        </select>

        <br />
        <br />
        <label>Description:</label>
        <input
          type="textarea"
          placeholder="Enter your firstname"
          style={{ width: "200px", height: "100px" }}
          onChange={handleFormData}
          name="description"
          value={data.description}
        />
        <br />
        <br />
        <button type="submit" onClick={handleSaveButton}>
          Save
        </button>
      </form>

      <div>
        <center>
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
                  {editindex == index + 1 ? (
                    <>
                      
                        <td>
                          {" "}
                          <input
                            type="text"
                            name="firstname"
                            placeholder="Enter your firstname"
                            onChange={handleFormData}
                            value={data.firstname}
                          />{" "}
                        </td>

                        <td>
                          {" "}
                          <input
                            type="text"
                            name="lastname"
                            placeholder="Enter your lastname"
                            onChange={handleFormData}
                            value={data.lastname}
                          />{" "}
                        </td>
                        <td>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleFormData}
                            value={data.email}
                          />
                        </td>
                        <td>
                            <label>
                                male
                            </label>
                          <input
                            type="radio"
                            name="gender"
                            onChange={handleFormData}
                            value="male"
                            checked={data.gender == "male"}
                          />
                        
                        <label>female</label>
                          <input
                            type="radio"
                            name="gender"
                            onChange={handleFormData}
                            value="female"
                            checked={data.gender == "female"}
                          />
                          </td>
                        
                        <td>
                            <label>Reading</label>
                          <input
                            type="checkbox"
                            name="hobbies"
                            onChange={handleFormData}
                            value="Reading"
                            checked={data.hobbies == "Reading"}
                          />
                        

                        
                          {" "}
                          <label>Painting</label>
                          <input
                            type="checkbox"
                            name="hobbies"
                            onChange={handleFormData}
                            value="Painting"
                            checked={data.hobbies == "Painting"}
                          />
                         <label>Coading</label>
                          <input
                            type="checkbox"
                            name="hobbies"
                            onChange={handleFormData}
                            value="Coading"
                            checked={data.hobbies == "Coading"}
                          />
                        </td>
                        <td>
                          <select onChange={handleFormData} name="statuss">
                            <option value="">Select</option>
                            <option
                              value="Active"
                              selected={data.statuss == "Active"}
                            >
                              Active
                            </option>
                            <option
                              value="Inactive"
                              selected={data.statuss == "Inactive"}
                            >
                              Inactive
                            </option>
                          </select>
                        </td>

                        <td>
                          <input
                            type="textarea"
                            placeholder="Enter your firstname"
                            style={{ width: "200px", height: "100px" }}
                            onChange={handleFormData}
                            name="description"
                            value={data.description}
                          />
                        </td>
                        <td>
                          {" "}
                          <button type="submit" style={{border: "2px solid green", color:"green"}} onClick={handleSaveButton}>
                            Save
                          </button>
                        </td>
                    
                    </>
                  ) : (
                    <>
                      <td>{userlist.firstname}</td>
                      <td>{userlist.lastname}</td>
                      <td>{userlist.email}</td>
                      <td>{userlist.gender}</td>
                      <td>{userlist.hobbies}</td>
                      <td>{userlist.statuss}</td>
                      <td>{userlist.description}</td>
                      <button
                        style={{ border: "2px solid blue", color: "blue" }}
                        onClick={() => {
                          handleEditButton(index + 1);
                        }}
                      >
                        Edit
                      </button>
                    
                    </>
                  )}
                </tr>
              ))}
            </tr>
          </table>
        </center>
      </div>
    </>
  );
}
export default FormVersion4;

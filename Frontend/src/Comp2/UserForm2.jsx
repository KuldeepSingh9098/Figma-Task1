import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import UserList from "../Comp2/UserList2";

const UserForm2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
    if (id == undefined) {
      var Pdata = localStorage.getItem("data");
      var Pdatatwo = JSON.parse(Pdata);
      setArrayData(Pdatatwo);
      setData(Pdatatwo[Pdatatwo.length - 1]);
    } else {
      var Pdata = localStorage.getItem("data");
      var Pdatatwo = JSON.parse(Pdata);
      console.log(Pdatatwo);
      setArrayData(Pdatatwo);
      let Pdatatwo2 = Pdatatwo.filter((userlist, index) => {
        return index + 1 == id;
      });
      console.log(Pdatatwo2);
      setData(Pdatatwo2[0]);
      console.log(Pdatatwo2[0]);
      setEditIndex(id);
    }
  }, []);

  const handleFormData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveButton = (e) => {
    // const upDatedData = [...arraydata];
    e.preventDefault();

    // console.log("upDatedData", upDatedData);
    // console.log("arraydata", arraydata);

    if (editindex == null) {
      arraydata.push(data);
    } else { 
      arraydata[editindex - 1] = data;
    }
    setArrayData(arraydata);
    localStorage.setItem("data", JSON.stringify(arraydata));
    sessionStorage.setItem("data", JSON.stringify(arraydata));

    navigate("/userlist2");
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
        <div>
          <button type="submit" onClick={handleSaveButton}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm2;

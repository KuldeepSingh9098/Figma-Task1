import React from 'react'

const Practice = () => {
  return (
    <div>
    <table>
  <tbody>
    {arraydata.map((userlist, index) => (
      <tr key={index}>
        <td>{index + 1}</td>

        {editIndex === index ? (
          <>
            <td>
              <input
                type="text"
                name="firstname"
                value={editData.firstname}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="lastname"
                value={editData.lastname}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
              />
            </td>
            {/* Repeat for other fields */}
            <td>
              <button onClick={handleSaveRow}>Save</button>
              <button onClick={() => setEditIndex(null)}>Cancel</button>
            </td>
          </>
        ) : (
          <>
            <td>{userlist.firstname}</td>
            <td>{userlist.lastname}</td>
            <td>{userlist.email}</td>
            {/* Repeat for other fields */}
            <td>
              <button onClick={() => handleEditButton(index)}>Edit</button>
            </td>
          </>
        )}
      </tr>
    ))}
  </tbody>
</table>  
    </div>
  )
}

export default Practice








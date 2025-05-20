import React, { useState } from 'react';

function Gexample(){
    const [data, setData] = useState({
        firstName: '',
        email: ''
    })

    const handleClick = () => {
        // setCount(count+1)
        setName('Rohit')
    }

    const handleChange = (e) => {
        // setData()
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    console.log('data----', data)

    return(
        <div>
            <form>
                <input 
                    type='text'
                    placeholder="Type here"
                    value={data.firstName}
                    name='firstName'
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder="Type here"
                    value={data.email}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}
export default Gexample
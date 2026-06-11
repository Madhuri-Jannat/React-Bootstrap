import axios from 'axios';
import React, { useState } from 'react';

export default function Forms() {
    const [inputs, setInputs] = useState({});

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    console.log(inputs);

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost/myapp2/Api/user_create.php', inputs)
            .then(res => { 
                alert('Data sent successfully!'); 
                console.log(res.data);
            })
            .catch(err => {
                console.error("Error connecting to API:", err);
            });
    }

    return (
        <>
            <h1>Form</h1>
    
            <form onSubmit={handleSubmit}>
                name: <br />
          
                <input type="text" name='fname' value={inputs.fname || ''} onChange={handleChange}/> <br /> <br />
                
                Gender: <br /> <br />
                Male: <input type="radio" name='gender' value="male" checked={inputs.gender === 'male'} onChange={handleChange} /> 
          
                Female: <input type="radio" name='gender' value="female" checked={inputs.gender === 'female'} onChange={handleChange} /> <br />
                
                Address: <br /> 
                <input type="text" name='address' value={inputs.address || ''} onChange={handleChange} />
                <br /> <br />
                
                District: <br />
                <select name="district" value={inputs.district || ''} onChange={handleChange}>
                    <option value="">Select one</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Rangpur">Rangpur</option>
                </select> <br /> <br />

                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

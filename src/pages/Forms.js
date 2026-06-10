// import React from 'react'
import React,{useState} from 'react'

export default function Forms() {
    const[inputs,setInputs] = useState({});
    function handleChange(e){
        const name =e.target.name;
        const value =e.target.value;

        setInputs(values => ({...values,[name]: value}))
    }
    console.log(inputs)

  return (
    <>
      <h1>Form</h1>
      <form action="">
        name: <br />
        <input type="text" name='fname' value={inputs.fname} onChange={handleChange}/> <br />
        Gender: <br />
        Male: <input type="radio" name='gender' value="male" checked={inputs.gender==='male'} onChange={handleChange} /> 
        
        Female: <input type="radio" name='gender' value="Female" checked={inputs.gender==='Female'} onChange={handleChange} /> <br />
        Address: <br />
        <input type="text" name='address' value={inputs.address} onChange={handleChange} />
        <br />
        District: <br />
        <select name="district" onChange={handleChange}>
            <option value="">Select one</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Barisal">Barisal</option>
            <option value="Rangpur">Rangpur</option>
        </select>
      </form>
    </>
  )
}

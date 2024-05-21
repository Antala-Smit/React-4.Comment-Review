import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { useState } from 'react'

const Dynamictable = () => {
  const [input, setInput] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      name: '',
      email: '',
      phone: '',
    }
  ]);

  const addfield = () => {
    let obj = {
      id: Math.floor(Math.random() * 1000),
      name: '',
      email: '',
      phone: '',
    };
    setInput([...input, obj]);
  };

  const removfield = (id) => {
    setInput(input.filter(val => val.id != id));
  };

  const handlechange = (id, field, value) => {
    const updateinput = input.map(item => 
      item.id === id ? {...item, [field]: value} : item
    );
    setInput(updateinput);  
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>Dynamic Table</h1>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th className="text-center">Full Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Phone</th>
            <th className="text-center">
              <button className='btn btn-primary' onClick={addfield}>Add</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {input.map((val, index) => (
              <tr key={val.id}>
                <td>
                  <input type="text" className='form-control' value={val.name} onChange={(e) => handlechange(val.id, 'name', e.target.value)}/>
                </td>
                <td>
                  <input type="text" className='form-control' value={val.email} onChange={(e) => handlechange(val.id, 'email', e.target.value)}/>
                </td>
                <td>
                  <input type="text" className='form-control' value={val.phone} onChange={(e) => handlechange(val.id, 'phone', e.target.value)}/>
                </td>
                <td className="text-center">
                  {index !== 0 && (<button className="btn btn-danger" onClick={() => removfield(val.id)} >Remove</button>)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dynamictable;

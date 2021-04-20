import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
const [admin,setAdmin]=useState({email:''})
console.log(admin);
  
const handleBlur = (e) => {
    const newAdmin ={
        ...admin
    }
    newAdmin[e.target.name]=e.target.value ;
    setAdmin(newAdmin)
}

const onSubmit = (e)=> {
    e.preventDefault();
const newAdmin={...admin}

    fetch(`https://fathomless-beach-99160.herokuapp.com/makeAdmin`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newAdmin)
    })
    .then(response => response.json())
    .then(result => {
        if(result){
            alert('Admin Added Sucessfully');
        }
    })

}
    return (
        <div  className='d-flex'>
            <div className='col-md-4'>
                <Sidebar/>
            </div>
            <div  className='col-md-7 mt-5 ml-5 pr-3'>
            <form>
                <input className='w-50 form-control' onBlur={handleBlur} name='email' placeholder='Type Valid Email' />
                <br/>
                <button className='btn w-25 btn-outline-warning text-white ' onClick={onSubmit} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
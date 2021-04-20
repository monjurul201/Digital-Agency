import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = (props) => {

  console.log(props);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order,setOrder]=useState({})
   const {id}= useParams();
   console.log(id);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {

    const newOrder={
      city:data.city,
     name:loggedInUser.userName,
     email:loggedInUser.email,
      order:order
    }
console.log(newOrder);

    fetch(`https://fathomless-beach-99160.herokuapp.com/addOrder`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newOrder)
  })
  .then(response => response.json())
  .then(result => {
      if(result){
          alert('Order submitted successfully');
      }
  })
  }

    

   useEffect(() => {
    fetch(`https://fathomless-beach-99160.herokuapp.com/Services/${id}`)
    .then(res => res.json())
    .then(data => {
     setOrder(data[0])
        
    })
},[id] )
console.log(loggedInUser);
console.log(order);

    return (
        <div className='d-flex'>
          <div className='col-md-4'>
            <Sidebar/>
          </div>
          <div className='col-md-7 mt-5 ml-5 pr-3'>
            
          <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                <input className='w-50' value={loggedInUser.userName} {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                </div>
             
                <div className='form-group'>
                <input className='w-50' {...register("city", { required: true })} placeholder='Enter Your City' />
                {errors.city && <span>This field is required</span>}
                </div>
                 <input  type="submit" />   
                </form>
          </div>
        </div>
    );
};

export default Order;
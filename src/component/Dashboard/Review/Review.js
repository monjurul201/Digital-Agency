import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import Header from '../../Home/Header/Header';

const Review = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        let newData = { ...data }
        newData.image = loggedInUser.userPhoto;
        console.log(newData);

        fetch(`https://fathomless-beach-99160.herokuapp.com/addReview`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(result => {
            if(result){
                alert('review submitted successfully');
            }
        })

        
    }

    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    console.log(loggedInUser);
    return (
  
       
        <div className='row ml-2'>
            
            <div className='col-md-3'>
                <Sidebar/>
            </div>
            <div className="col-md-8 mt-5 ml-5  p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                     <input  className='form-control w-75 ' {...register("name", { required: true })} placeholder='Your Name' />
                     {errors.name && <span className='text-danger'>This field is required</span>}
                </div>
                <br/>
                <div>
                    <input  className='form-control w-75' {...register("designation", { required: true })} placeholder='Designation' />
                     {errors.designation && <span className='text-danger'>This field is required</span>}
                </div>
                <br/>
                <div>
                    <input style={{height:'100px'}} className='form-control w-75'{...register("description", { required: true })} placeholder='Description' />
                     {errors.description && <span className='text-danger'>This field is required</span>}
                </div>
                <br/>
                    <div >
                           <input className='btn btn-success' type="submit" />
                    </div>
                    
            </form>
            </div>
        </div>
     
    );
};

export default Review;
import axios from "axios";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
  const [photoURL, setPhotoURL] = useState(null);
  const {register, handleSubmit,formState: { errors }} = useForm();

  const onSubmit = (data) => {
      console.log(data);
    const ServiceData = {
      Service: data.Service,
      PhotoURL: photoURL,
      Description: data.Description,
      
    };
    const url = `https://fathomless-beach-99160.herokuapp.com/addService`;
    console.log(ServiceData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(ServiceData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Added Successfully");
        }
      });
  };


     const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '8bbd4614a65e8174ee9894087548fc04');
        imageData.append('image', event.target.files[0])

        
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
              console.log(response);
              setPhotoURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

 
  return (
      <div className='d-flex'>
      <div className="col-md-6">
        <Sidebar />
      </div>
      <div className="col-md-6 mt-5">
   
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
          <input className='w-50' name='Service'  {...register("Service", { required: true })} placeholder=' Service Name' />
          {errors.Service && <span>This field is required</span>}
          </div>

          <div className='form-group'>
          <input className='w-50' style={{height:'100px'}} name='Description'  {...register("Description", { required: true })} placeholder='Description'  />
          {errors.Description && <span>This field is required</span>}
          </div>

          <input className='mb-3' name="exampleRequired" type='file' onChange={handleImageUpload} /> <br />

          <input className='btn btn-success' type="submit" />
        </form>
      </div>
   </div>
  );
};

export default AddService;

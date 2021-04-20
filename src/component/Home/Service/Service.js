import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceProduct from '../ServiceProduct/ServiceProduct';

const Service = () => {
    const [service,setService]=useState([])

    useEffect(() => {
        fetch('https://fathomless-beach-99160.herokuapp.com/Services')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setService(data)
        })
    },[] )

   
    return (
        <div>
            <h1 className='text-center mt-5'>Our <span style={{borderBottom:'5px solid hotpink',color:'hotpink'}}>Services</span></h1>
            <div className='container d-flex justify-content-center mt-5'>
           
            <Row>
                {
                    service.map(service => (<ServiceProduct key={service._id} service={service}></ServiceProduct> ))
                }  
            </Row>
        </div>
        </div>
    );
};

export default Service;
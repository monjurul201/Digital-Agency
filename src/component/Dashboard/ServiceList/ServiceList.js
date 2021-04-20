import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ServiceListTable from '../ServiceListTable/ServiceListTable';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

const [serviceList,setServiceList]=useState([]);

useEffect(() => {
  fetch('https://fathomless-beach-99160.herokuapp.com/serviceList')
  .then(res => res.json())
  .then(data => {
      console.log(data);
      setServiceList(data)
  })
},[] )


    return (
      <div className='row ml-2'>
            <div className='col-md-3'>
               <Sidebar/>
            </div>
        <div className="col-md-8 mt-5 ml-5  p-5">
           
           <Table responsive="sm">
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Email id </th>
                            <th>Service</th>
                            <th>Address</th>
                            <th>Stutas</th>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            serviceList.map( service => (<ServiceListTable key={service._id} service={service}></ServiceListTable>))
                          }
                    </tbody>
                </Table>
        </div>
      </div>
    );
};

export default ServiceList;
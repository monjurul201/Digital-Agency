import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import MangeServiceDetails from '../MangeServiceDetails/MangeServiceDetails';
import Sidebar from '../Sidebar/Sidebar';

const MangeService = () => {

    const [mangeService,setMangeService]=useState([]);
    const[deleteItems,setDeleteItems]=useState(false)
    useEffect(() => {
        fetch('https://fathomless-beach-99160.herokuapp.com/Services')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMangeService(data)
        })
    },[deleteItems] )

     // delete service
     const deleteIeams = (id) => {
        console.log('service deleted', id);
        fetch(`https://fathomless-beach-99160.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {

                if (data) {
                    alert('Product delete successfully')
                    setDeleteItems(data)
                }
            })
    }

    return (
        <div className='row ml-2'>
            <div className='col-md-3'>
                <Sidebar/>
            </div>
            <div className="col-md-8 mt-5 ml-5  p-5">
            <Table responsive="sm">
                            <thead >
                                <tr>
                                    <th>Service Name</th>
                                    <th>Service Id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  
                                    mangeService.map(dtservice => <MangeServiceDetails deleteIeams={deleteIeams} dtservice={dtservice}></MangeServiceDetails>)
                                }

                            </tbody>
                        </Table>
            </div>
        </div>
    );
};

export default MangeService;
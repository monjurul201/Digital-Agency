import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import OrderListDetails from '../OrderListDetails/OrderListDetails';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
   const [orders, setOrders] = useState([])
   const [addedOrder,setAddedOrder]=useState(false)
    useEffect(() => {
        fetch(`https://fathomless-beach-99160.herokuapp.com/orders?email=`+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if(data){
                    setAddedOrder(data)
                }
                setOrders(data)})
    }, [])
    console.log(orders);
    return (
        <div className='d-flex'>
            <div className='col-md-6'>
                <Sidebar/>
            </div>
            <div className='col-md-6'>
            <Table responsive="sm">
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Email id </th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderListDetails key={order._id} order={order}></OrderListDetails>)
                        }
                    </tbody>
                </Table>
            </div>


        </div>
    );
};

export default OrderList;
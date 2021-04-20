import React from 'react';

const OrderListDetails = ({order}) => {
    console.log(order);
 
    return (
        <tr>
        <td> {order.name}</td>
        <td>{order.email}</td>
        <td>{order.order.Service}</td>
        <td>on going</td>
      </tr>
    );
};

export default OrderListDetails;
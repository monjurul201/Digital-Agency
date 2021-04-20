import React from 'react';

const ServiceListTable = ({service}) => {
    return (
        <tr>
            <td> {service.name}</td>
            <td>{service.email}</td>
            <td>{service.order.Service}</td>
            <td>{service.city}</td>
            <td>on going</td>
      </tr>
    );
};

export default ServiceListTable;
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MangeServiceDetails = (props) => {
    console.log(props);
    const {_id,Service}=props.dtservice;
    return (
        <tr>
                <td>{Service}</td>
                <td>{_id}</td>
                <td> <button onClick={()=> props.deleteIeams(_id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashAlt}/></button> </td>
            </tr>
    );
};

export default MangeServiceDetails;
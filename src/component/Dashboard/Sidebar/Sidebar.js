import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCartPlus, faCogs, faCommentDots, faGripHorizontal, faHome, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const [isAdmin,setIsAdmin]=useState({})

    useEffect(() => {
        fetch(`https://fathomless-beach-99160.herokuapp.com/getAdmin?email=`+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data[0])
            })
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between  col-md-4 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                
             {  
             
             isAdmin ?
             
         <div>
                        <li>
                            <Link to="/dashboard" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                            </Link>
                        </li>

                        <li>
                            <Link to="/service" className="text-white">
                                <FontAwesomeIcon icon={faBox} /> <span>Services List</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mangeService" className="text-white">
                                <FontAwesomeIcon icon={faCogs} /> <span>MangeService</span>
                            </Link>
                        </li>
                </div> :
                
                <div>
                        
                <li>
                        <Link to="/order" className="text-white">
                            <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faBox} /> <span>OrderList</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span> 
                        </Link>
                    </li>
        </div>
}
                    

            </ul>


                <h4>
                        <Link to="/home" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>Back To Home</span> 
                        </Link>
                </h4>
        </div>
    );
};


export default Sidebar;
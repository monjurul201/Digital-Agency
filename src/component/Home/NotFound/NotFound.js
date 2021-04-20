import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        
            <div>
                <div className='d-flex justify-content-center'>
                    <Link to='/home'>  <button className='btn btn-success' style={{marginTop:'75%'}}><FontAwesomeIcon  icon={faArrowLeft}/> Back To Home </button></Link>
              </div>
              <div style={{marginTop:'5%'}} className='d-flex justify-content-center'>
             
             <div>
                 <h1 style={{ color: 'red',fontSize:'100px'}}>404</h1>
             </div>
            <div style={{marginLeft:'15px',fontSize:'30px'}}>
                <p>Oops! You're lost.</p>
                <p>The page you are looking for was not found</p>
          </div>
        </div>
            </div>
      
    );
};

export default NotFound;
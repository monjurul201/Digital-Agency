import React from 'react';

import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from "cdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './subscribe.css'
const Subscribe = () => {
    return (
      <div className=' subscribe mt-5'>
                <div style={{height:'70vh' }} className='d-flex align-items-center '>
                    <CDBContainer>
                    <CDBCard style={{ width: "30rem",margin:'0 auto',BackgroundColor:'black' }}>
                    <CDBCardBody className="mx-4">
                        <div className="text-center mt-4 mb-2">
                        <p className="h4 font-weight-bold text-primary"> Subscribe </p>
                        </div>
                        <CDBInput label="Your name" type="text" icon="user" iconClass="text-muted"/>
                        <CDBInput label="Your email" type="email" icon="envelope" iconClass="text-muted"/>
                        <CDBBtn
                        outline
                        color="primary"
                        style={{width:"40%"}}
                        className="btn-block mt-5 mx-auto hover" >
                        Send
                        <span> <FontAwesomeIcon className='ml-2' icon={faPaperPlane} /></span>
                        </CDBBtn>
                    </CDBCardBody>
                    </CDBCard>
                </CDBContainer>
                </div>
      </div>
       
    );
};

export default Subscribe;
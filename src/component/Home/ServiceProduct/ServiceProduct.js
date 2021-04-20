import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./serviceProduct.css";


const ServiceProduct = (props) => {
  console.log(props);
  let { PhotoURL, _id, Service, Description } = props.service;

  return (
      
        <Col as={Link} to={`/order/${_id}`} className="cart" md={6} lg={4}>
          <div className="singleProduct">
                <div className='animation' style={{ textAlign: "center", padding: "20px",backgroundColor: "white", }}>
                    <img style={{ width: "100%"}} src={PhotoURL} alt="picture"/>
                </div>
                <div style={{ textAlign: "center",color:'black' }}>
                    <h4 >{Service}</h4>
                    <p>{Description}</p>
                </div>
              </div>
        </Col>
  );
};

export default ServiceProduct;

import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className='banner-title'>
        <h1 className="text-white">
          We are full range <br /> desgin & <span style={{color:'hotpink'}}>  development  agency.</span>
        </h1>
        <Link to='/'><button className='btn-color mt-4'> Hire Us</button></Link>
      </div>
    </div>
  );
};

export default Banner;

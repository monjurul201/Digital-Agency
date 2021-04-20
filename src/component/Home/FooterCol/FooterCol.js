import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
              <div style={{textAlign:'center'}} className="col-md-6">
            <h6 style={{color:'hotpink',fontSize:'25px'}} className=" pb-2">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-white fs-2">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;
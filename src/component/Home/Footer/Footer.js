import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'

const Footer = () => {

  
    const ourAddress = [
        {name: "NILPHAMAR, BORO SONGOLSHI" , link: "/"},
        {name: "DHAKA,BANLDESH" , link: "/"},
       
    ]
    const services = [
        {name: "Web Design && Mobile Design" , link: "/web-design"},
        {name: "Digital Marketing" , link: "/digital-marketingt"},
        {name: "Web-Devloper" , link: "/Web-Devloper"}
    ]
    return (
        <footer  className="footer-area bg-dark">
            <div style={{height:'70vh'}} className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>

                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className='text-white pb-5'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import Banner from '../Banner/Banner';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurWork from '../OurWork/OurWork';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';
const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Service/>
            <OurWork/>
            <ClientFeedBack/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default Home;
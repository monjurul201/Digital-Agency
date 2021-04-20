import React from 'react';
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from "cdbreact";
import UI from '../../../images/4140.jpg'
import Computer from '../../../images/computer.jpg'
import Digital from '../../../images/31958.jpg'


const OurWork = () => {
    return (
        <div  className='mt-5 mb-5'>
            <h1 style={{color:'hotpink'}} className='mb-5 text-center'> <span style={{borderBottom:'5px solid hotpink'}}> Our Works</span> </h1>
            <div>
            <CDBContainer className='w-75'>
      <CDBContainer>
        <CDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          slide
        >
          <CDBCarouselInner>
            <CDBCarouselItem itemId="1">
              <CDBView>
                <img
                style={{height:'300px'}}
                  className="d-block w-100"
                  src={UI}
                  alt="First slide"
                />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="2">
              <CDBView>
                <img
                  style={{height:'300px'}}
                  className="d-block w-100"
                  src={Computer}
                  alt="Second slide"
                />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="3">
              <CDBView>
                <img
                  style={{height:'300px'}}
                  className="d-block w-100"
                  src={Digital}
                  alt="Third slide"
                />
              </CDBView>
            </CDBCarouselItem>
          </CDBCarouselInner>
        </CDBCarousel>
      </CDBContainer>
    </CDBContainer>
            </div>
        </div>
    );
};

export default OurWork;
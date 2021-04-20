import React from 'react';

const ReviewCard = ({review}) => {
    console.log(review);
    const{designation,name,image,description}=review;
    return (
           <div  className='col-md-4 mt-4'>
               <div style={{height:'280px'}} className=" border p-3 round ">
                <div className="d-flex align-items-center">
                    <img className="w-25 p-2 round" src={image} alt="" />
                    <div className="p-2">
                        <h6 className="font-weight-bold">{name}</h6>
                        <p>{designation}</p>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
           </div>

           </div>
    );
};

export default ReviewCard;
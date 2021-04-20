import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const ClientFeedBack = () => {

     const [review,setReview]=useState([])
    useEffect(() => {
        fetch('https://fathomless-beach-99160.herokuapp.com/Review')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setReview(data)
        })
    },[] )

    if (review.length > 5) {
      const review = review.slice(0, 6);
    }
    return (
        <div className='container mt-3'>
            <h1 style={{color:'hotpink'}} className='text-center mt-5'><span style={{borderBottom:'5px solid hotpink'}}>Client FeedBack</span></h1>
         <div className='m-2'>
                <div   div className='row mt-5'>
                    {
                        review.map(review => (<ReviewCard key={review._id} review={review}></ReviewCard> ))
                    }
                </div>
         </div>
        </div>
    );
};

export default ClientFeedBack;
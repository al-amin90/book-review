import React, { useState } from 'react';
import StoreCard from '../StoreCard/StoreCard';

const StoreCards = ({ handleAddToCart, courses }) => {


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7'>
            {
                courses.map(course => <StoreCard
                    key={course.bookId}
                    course={course}
                    handleAddToCart={handleAddToCart}
                ></StoreCard>)
            }
        </div>
    );
};

export default StoreCards;
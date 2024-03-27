import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-128px)]'>
            <FadeLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;
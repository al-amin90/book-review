import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);

    return (
        <div>

        </div>
    );
};

export default BookDetails;
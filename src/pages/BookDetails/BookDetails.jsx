import React, { useEffect } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { setStorage } from '../../ulils/localStorage';
import Loader from '../Loader/Loader';


const BookDetails = () => {
    const allBooks = useLoaderData();
    const { id } = useParams();
    const navigation = useNavigation()

    const book = allBooks.find(sBook => sBook.bookId === +id);
    const { bookId, bookName, author, image, category, tags, publisher, totalPages, rating, yearOfPublishing, review } = book;

    const handleAddWishlist = (id) => {
        setStorage(id, "wishlist", false);
    }

    const handleAddRead = id => {
        setStorage(id, "read", true);
    }

    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <div className="grid grid-cols-1 gap-11 lg:grid-cols-2 mb-24 h-full ">
            <div className="rounded-xl flex items-center justify-center p-10 bg-[#F3F3F3] ">
                <img className="w-[70%]" src={image} alt="Shoes" /></div>
            <div className="">
                <h2 className="font-bold text-3xl font-fair text-[#131313]  pb-3"> {bookName}
                </h2>
                <p className="text-lg font-medium pb-4 border-b border-[#13131326]">By : {author}</p>
                <p className="text-lg font-medium py-3 border-b border-[#13131326]"> {category}</p>
                <p className='text-sm my-5 font-normal text-[#131313B3]'><span className='text-[#131313] font-bold'>Review:</span> {review}</p>

                <div className="flex items-start lg:items-center gap-3 py-5 border-b border-[#13131326]">
                    <h6 className='text-[#131313] font-bold text-base'>Tag</h6>
                    <div className='*:bg-[#23BE0A0D] flex flex-wrap *:rounded-full *:text-sm font-medium text-[#23BE0A] gap-2 *:py-2 *:px-4'>
                        {
                            tags.map(tag => <h5 key={tag}>#{tag}</h5>)
                        }
                    </div>
                </div>

                <table className='text-left mt-5'>
                    <thead>
                        <tr>
                            <th className='text-[#131313B3] font-normal text-base pr-12'>Number of Pages:</th>
                            <th className='font-semibold text-[#131313] text-base'>{totalPages}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <th className='text-[#131313B3] font-normal text-base pr-12'>Publisher:</th>
                            <th className='font-semibold text-[#131313] text-base'>{publisher}</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th className='text-[#131313B3] font-normal text-base pr-12'>Year of Publishing:</th>
                            <th className='font-semibold text-[#131313] text-base'>{yearOfPublishing}</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th className='text-[#131313B3] font-normal text-base pr-12'>Year of Rating:</th>
                            <th className='font-semibold text-[#131313] text-base'>{rating}</th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-5 flex gap-3  font-semibold text-lg">
                    <button
                        onClick={() => handleAddRead(bookId)}
                        className="btn text-[#131313] hover:bg-[#23BE0A] hover:text-white border border-[#1313134D]  ">Read</button>
                    <button
                        onClick={() => handleAddWishlist(bookId)}
                        className="btn text-white bg-[#59C6D2]">Wishlist</button>
                </div>
            </div>
        </div>

    );
};

export default BookDetails;
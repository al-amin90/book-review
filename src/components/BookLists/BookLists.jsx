import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";



const BookLists = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div>
            <h1 className="font-bold text-3xl mb-10 font-fair text-center text-[#131313]">Books</h1>
            <div className="grid grid-cols-1 mb-24 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map(book => <SingleBook key={book.bookId} book={book}></SingleBook>)
                }
            </div>
        </div>
    );
};

export default BookLists;
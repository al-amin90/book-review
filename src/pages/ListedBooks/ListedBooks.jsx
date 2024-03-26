import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStorage } from "../../ulils/localStorage";
import WishlistBooks from "../../components/WishlistBooks/WishlistBooks";


const ListedBooks = () => {
    const [index, setIndex] = useState(0);
    const [displayReadBooks, setDisplayReadBooks] = useState([])
    const [displayWishBooks, setDisplayWishBooks] = useState([])

    // const [displaySortReadBooks, setDisplaySortReadBooks] = useState(displayReadBooks);
    const allBooks = useLoaderData();

    console.log(allBooks);


    useEffect(() => {
        const storeBooksId = index === 0 ? getStorage("read") : getStorage("wishlist");


        // const storedBooks = allBooks.filter(book => storeBooksId.includes(book.bookId));
        // finding data useing id ----------
        const storedBooks = [];
        for (const id of storeBooksId) {
            const book = allBooks.find(book => id === book.bookId)
            storedBooks.push(book)
        }


        // checking if data fetched ------------
        if (allBooks.length > 0) {

            index === 0 ? setDisplayReadBooks(storedBooks) : setDisplayWishBooks(storedBooks);
        }

    }, [allBooks])


    const handleFilter = value => {
        if ("rating" === value) {
            const desenSort = displayReadBooks.sort((a, b) => b.totalPages - a.totalPages);
            setDisplaySortReadBooks(desenSort);
            console.log(desenSort);
        }
    }

    return (
        <div >
            <div className="bg-[#1313130D] rounded-xl p-7">
                <h3 className="font-bold text-2xl text-center">Books</h3>
            </div>
            {/* select option here  */}
            <div className="flex mt-7 mb-10 items-center justify-center">
                <select onChange={(e) => handleFilter(e.target.value)} className="select text-white font-semibold text-base bg-[#23BE0A] select-bordered">
                    <option disabled selected value={""} className="text-white">Sort By?</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of pages</option>
                    <option value="publisher">Publisher year</option>
                </select>
            </div>

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start mb-7 flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                    onClick={() => setIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${index === 0 ? "border border-b-0" : "border-b text-[#13131380]"} rounded-t-lg dark:border-gray-600 `}>
                    <span>Read Books</span>
                </Link>
                <Link
                    onClick={() => setIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${index === 1 ? "border border-b-0" : "border-b text-[#13131380]"} rounded-t-lg dark:border-gray-600 `}>
                    <span>Wishlist Books</span>
                </Link>
            </div>


            <div className="flex flex-col gap-5 mb-24">
                {
                    index === 0 && displayReadBooks.map(book => <WishlistBooks
                        key={book.bookId}
                        book={book}></WishlistBooks>)
                }
                {
                    index === 1 && displayWishBooks.map(book => <WishlistBooks
                        key={book.bookId}
                        book={book}></WishlistBooks>)
                }
            </div>
        </div >
    );
};

export default ListedBooks;
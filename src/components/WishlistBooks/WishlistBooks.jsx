import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const WishlistBooks = ({ book }) => {
    const { bookId, bookName, author, image, category, tags, publisher, totalPages, rating, yearOfPublishing, review } = book;

    return (
        <div className="border border-[#13131326] rounded-xl p-5">
            <div className="flex gap-5 flex-col md:flex-row">
                <div className="rounded-xl flex  items-center justify-center p-6 bg-[#F3F3F3] ">
                    <img src={image} alt="Shoes" /></div>
                <div className="flex-grow">
                    <h2 className="font-bold text-2xl font-fair text-[#131313] mb-3"> {bookName}
                    </h2>
                    <p className="text-base font-medium pb-4">By : {author}</p>

                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 pb-3">
                        <div className="flex items-start lg:items-center gap-3">
                            <h6 className='text-[#131313] font-bold text-base'>Tag</h6>
                            <div className='*:bg-[#23BE0A0D] flex flex-wrap *:rounded-full *:text-sm font-medium text-[#23BE0A] gap-2 *:py-2 *:px-4'>
                                {
                                    tags.map(tag => <h5 key={tag}>#{tag}</h5>)
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2"><GrLocation className="text-xl" />Year of Publishing: {yearOfPublishing}</div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center pb-3 gap-3 border-b border-[#13131326]">
                        <div className="flex items-center gap-2 mr-6"><GoPeople className="text-xl" />Publisher: {publisher}</div>
                        <div className="flex items-center gap-2">
                            <HiOutlineDocumentChartBar className="text-xl" /> Page {totalPages}
                        </div>
                    </div>


                    <div className="mt-5 flex flex-wrap *:rounded-full *:text-sm font-normal gap-3 *:py-2 *:px-4">
                        <button className="bg-[#328EFF26] text-[#328EFF]">Category: {category}</button>
                        <button className="bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</button>
                        <button className="bg-[#23BE0A] text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistBooks;
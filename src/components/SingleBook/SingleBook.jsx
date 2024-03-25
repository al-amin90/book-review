import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
    const { bookId, bookName, author, image, category, tags, rating } = book;


    return (
        <Link to={`/book/${bookId}`}>
            <div className="border border-[#13131326] rounded-xl p-5 cursor-pointer">
                <figure className="rounded-xl flex items-center justify-center bg-[#F3F3F3] p-8"><img className="" src={image} alt="Shoes" /></figure>
                <div className="">
                    <div className="flex flex-wrap *:bg-[#23BE0A0D] *:rounded-full *:text-sm font-medium text-[#23BE0A] gap-2 *:py-2 *:px-4 mt-5">
                        {
                            tags.map(tag => <h5>{tag}</h5>)
                        }
                    </div>
                    <h2 className="font-bold text-2xl font-fair text-[#131313] my-3"> {bookName}
                    </h2>
                    <p className="text-base font-medium pb-4 border-b border-dashed border-[#13131326]">By : {author}</p>
                    <div className="flex text-[] font-medium text-base mt-4 justify-between">
                        <div><h4>{category}</h4></div>
                        <div className="flex items-center gap-2"><h4>{rating}</h4> <FaRegStar className="text-xl" /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;
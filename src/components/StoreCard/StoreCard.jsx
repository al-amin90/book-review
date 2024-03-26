import { LuDollarSign } from "react-icons/lu";
import { BsBook } from "react-icons/bs";

const StoreCard = ({ course, handleAddToCart }) => {
    const { bookId, bookName, price, rating, review, image } = course;
    return (
        <div className="p-4 border h-full rounded-xl flex flex-col justify-between">
            <figure className="flex rounded-xl bg-[#d4d2d2] items-center justify-center p-5">
                <img className="" src={image} alt="Shoes" />
            </figure>
            <div className="flex  flex-col ">
                <h2 className="text-base mt-4 font-semibold font-fair text-[#1C1B1B]">{bookName}</h2>
                <p className="mt-3 font-normal  text-sm">{review.slice(0, 100)}...</p>

                <div className="flex justify-between my-4">
                    <div className='flex items-center gap-2'>
                        <p><LuDollarSign /></p>
                        <p className="text-sm font-medium text-[#1C1B1B99]"> Price : {price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p><BsBook /></p>
                        <p className="text-sm font-medium text-[#1C1B1B99]">Rating : {rating}</p>
                    </div>
                </div>
                <div >
                    <button
                        onClick={() => (handleAddToCart(course, bookId))}
                        className="btn text-lg text-white w-full bg-[#23BE0A]"
                    >Select</button>
                </div>

            </div>
        </div>
    );
};

export default StoreCard;
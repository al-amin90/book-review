import { Link } from "react-router-dom";
import banner from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="mb-20 ">
            <div className="flex flex-col md:flex-row px-8 py-8 md:px-24 md:py-16 justify-center items-center bg-[#1313130D] rounded-2xl">
                <div className="flex-grow">
                    <h2 className="text-3xl lg:text-5xl max-w-md font-bold leading-none lg:leading-snug text-[#131313] mb-7 font-fair">Books to freshen up your bookshelf</h2>
                    <Link to="/listed-books"><button className="btn text-white md:flex hidden text-base bg-[#23BE0A]">View The List</button></Link>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
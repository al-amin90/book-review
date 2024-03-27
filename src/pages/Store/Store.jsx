import { useEffect, useState } from "react";
import StoreCards from "../../components/StoreCards/StoreCards";
import Cart from "../../components/Cart/Cart";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";


const Store = () => {
    const [carts, setCarts] = useState([])
    const [courses, setCourses] = useState([])
    const allBooks = useLoaderData();

    const navigation = useNavigation();

    useEffect(() => {
        setCourses(allBooks)
    }, [])

    // add to cart 
    const handleAddToCart = (course, id) => {
        const isAddCart = carts.find(c => c.id === id);
        if (!isAddCart) {
            setCarts([...carts, course]);
            toast.success("Course Added!");
        }
        else {
            toast.warn("Course Already Exists!!")
        }
    }

    // remove from cart 
    const handleRemoveCart = id => {

        const remainCart = carts.filter(cart => cart.bookId !== id);
        setCarts(remainCart);
    }
    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <div>
            <div className="bg-[#1313130D] rounded-xl p-7">
                <h3 className="font-bold text-2xl text-center">Store</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 pb-16'>
                <div className='md:col-span-9'>
                    <StoreCards
                        handleAddToCart={handleAddToCart}
                        courses={courses}
                    ></StoreCards>
                </div>
                <div className='md:col-span-3'>
                    <Cart
                        carts={carts}
                        handleRemoveCart={handleRemoveCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Store;
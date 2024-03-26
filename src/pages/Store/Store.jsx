import { useEffect, useState } from "react";
import StoreCards from "../../components/StoreCards/StoreCards";
import Cart from "../../components/Cart/Cart";
import { useLoaderData } from "react-router-dom";

export const remainCredit = 15;

const Store = () => {
    const [carts, setCarts] = useState([])
    const [courses, setCourses] = useState([])
    const allBooks = useLoaderData();

    useEffect(() => {
        setCourses(allBooks)
    }, [])

    // add to cart 
    const handleAddToCart = (course, id) => {

        const totalCredit = carts.reduce((p, c) => p + c.credit, 0)
        if (totalCredit + course.credit > remainCredit) {
            return toast.error(`Can't Add More than, ${remainCredit} Credit!!!`)
        }


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

        const remainCart = carts.filter(cart => cart.id !== id);
        setCarts(remainCart);
    }

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


const Cart = ({ carts, handleRemoveCart }) => {

    return (
        <div className="p-4 mt-7 border bg-white rounded-lg">
            <h2 className="text-xl mt-4 mb-5 font-bold text-[#59C6D2]">Books Name</h2>
            <ol className='text-sm font-normal pb-5 border-b border-[#1C1B1B33]'>
                {
                    carts.map((cart, idx) => <div>
                        <li key={idx} >{idx + 1}. {cart.bookName}</li>
                        <button
                            onClick={() => handleRemoveCart(cart.bookId)}
                            className="btn btn-xs btn-secondary">Delete</button>
                    </div>
                    )
                }
            </ol>

            <p className='text-base pt-4 font-semibold'>Total Price : {carts.reduce((p, c) => p + c.price, 0)} Tk</p>
        </div>
    );
};

export default Cart;
import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartPage = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);
  const { cartItems } = cart;

  const addtoCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is empty{" "}
          <Link className="underline" to="/">
            Go Back
          </Link>
        </Message>
      ) : (
        <div className="mt-2 flex flex-col space-y-5 justify-center items-center md:items-center md:flex-row md:space-x-5 md:px-20">
          <div className="md:basis-8/12 flex flex-col justify-center items-center">
            <h1>Shopping Cart</h1>
            <div className="w-full md:px-10">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col divide-y-2 md:flex-row md:items-center md:justify-center  md:divide-y-0 my-3 px-4 md:px-10 pb-4 space-y-4 border-b last:border-b-0"
                >
                  <div className="flex justify-center items-center bg-red-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      // style={{ maxWidth: '75px', maxHeight: '75px' }}
                      className="md:max-w-[80px] md:max-h-[80px]"
                    />
                  </div>
                  <Link
                    to={`/product/${item.id}`}
                    className="p-2 flex flex-col justify-center text-left md:flex-row md:items-center md:min-w-[200px] md:justify-center md:min-h-[70px] w-full hover:underline hover:decoration-gray-500"
                  >
                    {item.name}
                  </Link>
                  <p className="p-2 text-left w-full">${item.price}</p>
                  <div className="flex justify-between w-full p-4">
                    <p>Qty</p>
                    <div>
                      <select
                        name=""
                        value={item.qty}
                        onChange={(e) =>
                          addtoCartHandler(item, Number(e.target.value))
                        }
                        className="block px-2 w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring"
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    className="py-2 flex items-center justify-center border rounded-sm bg-gray-200 md:min-w-[50px] hover:bg-gray-300"
                    type="button"
                    onClick={() => removeFromCartHandler(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="md:basis-1/3 flex flex-col md:space-y-5 items-center space-y-2 divide-y-2 md:divide-y-0 w-full px-4 md:border md:border-solid md:rounded-lg md:min-h-[200px] md:p-4">
            <h2 className="w-full text-center md:text-start text-2xl text-gray-600">
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            <p className="text-gray-600 text-lg md:text-xl w-full">
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </p>
            <button
              type="button"
              className={`bg-gray-700 text-white p-3 w-[50%] text-center hover:bg-gray-600 border border-solid rounded-lg md:min-w-[95%] ${
                cartItems.length === 0 &&
                "opacity-85 pointer-events-none bg-slate-300"
              }`}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;

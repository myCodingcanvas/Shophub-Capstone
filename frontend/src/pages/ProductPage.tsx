import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../data/products";

const ProductPage = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    navigate("/cart");
  };

  return (
    <div className="flex flex-col">
      <Link
        to="/"
        className="p-2 bg-gray-300 hover:bg-gray-400 hover:text-white border border-solid rounded-sm w-20 h-[2.7rem] text-center"
      >
        Go Back
      </Link>
      <div className="mt-2 flex flex-col space-y-5 justify-center items-center md:flex-row md:space-x-5 md:items-start">
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: "500px", maxHeight: "500px" }}
        />
        <div className="flex flex-col px-3 divide-y-2 space-y-3 justify-between text-gray-500 w-full md:max-w-96">
          <h3>{product.name}</h3>
          <div className="pt-2">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
          <p className="pt-5">Price: ${product.price}</p>
          <p className="pt-5">Description: {product.description}</p>
        </div>
        <div className="flex flex-col items-center w-full md:w-48">
          <div className="flex justify-between w-full border border-solid rounded-sm p-4">
            <p>Price:</p>
            <strong>${product.price}</strong>
          </div>
          <div className="flex justify-between w-full border border-solid rounded-sm p-4">
            <p>Status:</p>
            <strong>
              {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </strong>
          </div>
          {product.countInStock > 0 && (
            <div className="flex justify-between w-full border border-solid rounded-sm p-4">
              <p>Qty</p>
              <div>
                <select
                  name=""
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="block px-2 w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring"
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div className="w-full border border-solid rounded-sm p-4 text-center">
            <button
              className={`bg-gray-700 text-white p-3 w-[50%] hover:bg-gray-600 border border-solid rounded-lg md:w-full ${
                product.countInStock === 0 &&
                "opacity-85 pointer-events-none bg-slate-300"
              }`}
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

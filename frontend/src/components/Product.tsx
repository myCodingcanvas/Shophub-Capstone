import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product({ product }) {
  return (
    <div
      className="my-3 p-3 mx-auto rounded border border-solid border-gray-400 shadow-md"
      style={{ maxWidth: "500px" }}
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="" className="rounded" />
      </Link>
      <div>
        <Link to={`/prodcut/${product.id}`}>
          <div className="text-xl overflow-hidden whitespace-nowrap">
            <strong className="block max-w-[100%] overflow-hidden text-ellipsis">
              {product.name}
            </strong>
          </div>
        </Link>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <h3>${product.price}</h3>
      </div>
    </div>
  );
}

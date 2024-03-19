import React from "react";
import Product from "../components/Product";
import products from "../data/products";

export default function HomePage() {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="flex items-center flex-col justify-center flex-wrap md:flex-row w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

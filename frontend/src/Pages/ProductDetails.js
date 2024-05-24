import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null); // Initialize as null

  useEffect(() => {
    if (params?.slug) getProducts();
  }, [params?.slug]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`/products/get-products/${params.slug}`);
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    // Logic for adding the product to the cart
    console.log("Add to Cart:", product);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {product ? (
          <>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure className="w-1/4 flex justify-center items-center p-4">
                <img
                  src={`/products/product-photo/${product._id}`}
                  alt={product.name}
                  className="w-200 h-300 object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-3xl font-bold">
                  {product.name}
                </h2>
                <p className="text-lg">{product.description}</p>
                <p className="text-lg font-bold">Price: ${product.price}</p>
                <p className="text-lg">
                  Category: {product.category ? product.category.name : "N/A"}
                </p>
                <p className="text-lg">
                  Available Quantity: {product.quantity}
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-outline "
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;

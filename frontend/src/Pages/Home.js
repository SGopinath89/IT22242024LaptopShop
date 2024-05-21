import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const navigate = useNavigate();

  // Fetch Products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/products/get-products");
      setProducts(data.products); // Corrected from data.product to data.products
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get("/category/get-category");
      setCategories(data.category);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  useEffect(() => {
    if (!checked.length) getAllProducts();
  }, [checked.length]);

  // Get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/products/product-filters", {
        checked,
      });
      setProducts(data.products); // Corrected from data.product to data.products
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (checked.length) filterProduct();
  }, [checked]);

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/4 p-4">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ul>
            {categories?.map((category) => (
              <li key={category._id} className="mb-1 ml-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  onChange={(e) => handleFilter(e.target.checked, category._id)}
                />
                <button className="ml-1">{category.name}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 p-4">
          <h1 className="mb-4">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((product) => (
              <div
                className="card card-compact w-full bg-base-100 shadow-xl"
                key={product._id}
              >
                <figure>
                  <img
                    src={`/products/product-photo/${product._id}`}
                    alt={product.name}
                  />
                </figure>
                <div className="card-body">
                  <Link
                    to={`/dashboard/admin/update-products/${product.slug}`}
                    className="product-link"
                  >
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <p>LKR {product.price}</p>
                  </Link>
                  <div className="card-actions justify-end space-x-2">
                    <button
                      className="btn btn-active"
                      onClick={() => navigate(`/products/${product.slug}`)}
                    >
                      More Details
                    </button>
                    <button className="btn btn-active btn-neutral">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

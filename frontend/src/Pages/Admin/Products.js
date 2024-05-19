import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/products/get-products");
      console.log("Fetched products:", data.product); // Log the fetched products
      setProducts(data.product);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Delete a product
  const deleteProduct = async (productId) => {
    try {
      const { data } = await axios.delete(
        `/products/delete-product/${productId}`
      );
      if (data.success) {
        toast.success("Product deleted successfully");
        getAllProducts(); // Refresh the list of products
      } else {
        toast.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/4 ml-3">
          <AdminMenu />
        </div>
        <div className="flex-grow w-3/4 ml-4 p-4">
          <h1 className="font-semibold">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((p) => (
              <div
                className="card card-compact w-full bg-base-100 shadow-xl"
                key={p._id}
              >
                <figure>
                  <img src={`/products/product-photo/${p._id}`} alt={p.name} />
                </figure>

                <div className="card-body">
                  <Link
                    key={p._id}
                    to={`/dashboard/admin/update-products/${p.slug}`}
                    className="product-link"
                  >
                    <h2 className="card-title">{p.name}</h2>
                    <p>{p.description}</p>
                  </Link>
                  <div className="card-actions justify-end space-x-2">
                    <button className="btn btn-primary">
                      <Link
                        to={`/dashboard/admin/update-products/${p.slug}`}
                        className="text-white"
                      >
                        Edit
                      </Link>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(p._id)}
                    >
                      Delete
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

export default Products;

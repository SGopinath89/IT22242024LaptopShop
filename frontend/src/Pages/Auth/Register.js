import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/authentication/register", formData);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register"}>
      <div className="flex flex-col lg:flex-row justify-center items-start mt-10 mb-10 gap-10 ">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top xl:max-w-lg ">
          <h1
            className="text-3xl font-semibold text-center text-gray-700 mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            REGISTER HERE
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Username</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-200 text-gray-600 border border-r-0 border-gray-300 rounded-l-md">
                  GalaxyEra.com/
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="flex-1 block w-full min-w-0 rounded-none rounded-r-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm input input-bordered"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full input input-bordered"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Phone No:</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full input input-bordered"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Street address</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full input input-bordered"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full input input-bordered"
                required
              />
            </div>
            <a
              href="/login"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Already have an account?
            </a>
            <div className="flex justify-end mt-4">
              <button
                type="reset"
                className="btn btn-error mr-3"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    password: "",
                  })
                }
              >
                Reset
              </button>
              <button type="submit" className="btn btn-neutral">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

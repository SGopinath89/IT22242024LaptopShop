import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //login handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/authentication/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden ">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            LOGIN
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <a
                href="#"
                className="text-xs text-gray-600 hover:underline hover:text-blue-600"
              >
                Forget Password?
              </a>
              <a
                href="/register"
                className="text-xs text-gray-600 hover:underline hover:text-blue-600"
              >
                Don't have an account?
              </a>
            </div>
            <div>
              <button className="btn btn-block btn-neutral">Login</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

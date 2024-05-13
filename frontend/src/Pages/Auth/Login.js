import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../../Context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth()
  const navigate = useNavigate();
  const location = useLocation()

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
          user:res.data.user,
          token:res.data.token,
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
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
      <form classname="" onSubmit={handleSubmit}>
        <div
          className="space-y-12"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "1200px",
          }}
        >
          <div>
            <br />
            <div className="">
              <h1>LOGIN HERE</h1>
              <div className="">
                <div className=" ">
                  <div className="mt-5 grid grid-cols-4 gap-x-2 gap-y-2 sm:grid-cols-3">
                    <div className="col-span-full">
                      <label className="">Email</label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="emailBox"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="emailBox"
                          autoComplete="emailBox"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="password"
                          name="passwordBox"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="passwordBox"
                          placeholder="Enter Password"
                          autoComplete="passwordBox"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Login;

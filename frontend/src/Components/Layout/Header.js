import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 text-xl">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Category</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Register</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">GalaxyEra</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <details>
                <summary>
                  <NavLink to={"/category"}>Category</NavLink>
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <ul class="menu bg-base-200 w-56 rounded-box">
      <li class="menu-title">Admin Panel</li>

      <li>
        <NavLink to={"/dashboard/admin/create-category"}>
          Create Category
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/admin/create-products"}>
          Create Products
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/admin/users"}>Users</NavLink>
      </li>
    </ul>
  );
};

export default AdminMenu;

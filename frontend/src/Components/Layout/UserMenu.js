import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <ul class="menu bg-base-200 w-56 rounded-box">
        <li class="menu-title">User Profile</li>

        <li>
          <NavLink to={"/dashboard/user/profile"}>Profile</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/user/orders"}>Orders</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;

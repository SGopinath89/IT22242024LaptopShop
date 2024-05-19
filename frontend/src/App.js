import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/user/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CreateCategory from "./Pages/Admin/CreateCategory";
import CreateProducts from "./Pages/Admin/CreateProducts";
import Users from "./Pages/Admin/Users";
import Profile from "./Pages/user/Profile";
import Orders from "./Pages/user/Orders";
import Products from "./Pages/Admin/Products";
import UpdateProducts from "./Pages/Admin/UpdateProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />}></Route>
          <Route path="user/profile" element={<Profile />}></Route>
          <Route path="user/orders" element={<Orders />}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />}></Route>
          <Route
            path="admin/create-category"
            element={<CreateCategory />}
          ></Route>
          <Route
            path="admin/create-products"
            element={<CreateProducts />}
          ></Route>
          <Route
            path="admin/update-products/:slug"
            element={<UpdateProducts />}
          ></Route>
          <Route path="admin/products" element={<Products />}></Route>
          <Route path="admin/users" element={<Users />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

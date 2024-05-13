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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="" element={<Dashboard />}></Route>
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

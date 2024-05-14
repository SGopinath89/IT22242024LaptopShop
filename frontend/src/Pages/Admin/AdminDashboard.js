import React from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { useAuth } from "../../Context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout>
        <div className="flex">
          <div className="w-1/4 ml-3">
            <AdminMenu />
          </div>
          <div className="w-3/4 ml-4 p-4">
            <h1 className="mb-4">Admin name: {auth?.user?.name}</h1>
            <h1 className="mb-4">Admin email: {auth?.user?.email}</h1>
            <h1>Admin phone: {auth?.user?.phone}</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashboard;

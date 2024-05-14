import React from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";
import Layout from "../../Components/Layout/Layout";

const Users = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="w-1/4 ml-3">
          <AdminMenu />
        </div>
        <div className="w-3/4 ml-4 p-4">users</div>
      </div>
    </Layout>
  );
};

export default Users;

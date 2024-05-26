import React from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../Context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout title={"Dashboard"}>
        <div className="flex">
          <div className="w-1/4 ml-3">
            <UserMenu />
          </div>
          <div className="w-3/4 ml-4 p-4">
            <h1 className="mb-4">user name: {auth?.user?.name}</h1>
            <h1 className="mb-4">user email: {auth?.user?.email}</h1>
            <h1>user phone: {auth?.user?.phone}</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;

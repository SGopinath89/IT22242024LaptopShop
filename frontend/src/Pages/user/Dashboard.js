import React from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../Context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout title={"Dashboard"}>
        <UserMenu />
        <div>{auth?.user?.name}</div>
      </Layout>
    </>
  );
};

export default Dashboard;

import React from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../Context/auth";

const Home = () => {
  const [auth,setAuth] = useAuth()
  console.log("Auth object:", auth);
  return (
    <Layout>
      <h1>Home Page</h1>
      <pre>
    {JSON.stringify(auth,null,4)}
      </pre>
    </Layout>
  );
};

export default Home;

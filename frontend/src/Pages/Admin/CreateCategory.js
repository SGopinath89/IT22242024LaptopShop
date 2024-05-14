import React from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";

const CreateCategory = () => {
  return (
    <>
      <Layout>
        <div className="flex">
          <div className="w-1/4 ml-3">
            <AdminMenu />
          </div>
          <div className="w-3/4 ml-4 p-4">create Category</div>
        </div>
      </Layout>
    </>
  );
};

export default CreateCategory;

import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import CategoryForm from "../../Components/Form/CategoryForm";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(null);
  const [updateName, setUpdateName] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/category/create-category", { name });
      if (data?.success) {
        toast.success(`${name} is created`);
        setName("");
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in input form");
    }
  };

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/category/update-category/${selected._id}`,
        { name: updateName }
      );
      if (data?.success) {
        toast.success(`${updateName} is updated`);
        setUpdateName("");
        setIsEditModalOpen(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in updating category");
    }
  };
 
  //delete category
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `/category/delete-category/${categoryToDelete._id}`
      );
      if (data?.success) {
        toast.success(`${categoryToDelete.name} is deleted`);
        setCategoryToDelete(null);
        setIsDeleteModalOpen(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error in deleting category");
    }
  };

  //get All Categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/category/get-category");
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const openEditModal = (category) => {
    setSelected(category);
    setUpdateName(category.name);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelected(null);
    setUpdateName("");
  };

  const openDeleteModal = (category) => {
    setCategoryToDelete(category);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCategoryToDelete(null);
  };

  return (
    <>
      <Layout>
        <div className="flex">
          <div className="w-1/4 ml-3">
            <AdminMenu />
          </div>
          <div className="w-3/4 ml-4 p-4">
            <h1 className="font-semibold mb-4">Manage Category</h1>
            <div className="overflow-x-auto mt-4">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
              <table className="table">
                <thead>
                  <tr className="bg-base-200 text-black text-lg">
                    <th></th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((c, index) => (
                    <tr key={c._id} className={index % 2 === 0}>
                      <th>{index + 1}</th>
                      <td>{c.name}</td>
                      <td>
                        <button
                          className="btn btn-outline"
                          onClick={() => openEditModal(c)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-outline btn-error ml-2"
                          onClick={() => openDeleteModal(c)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {isEditModalOpen && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit Category</h3>
              <CategoryForm
                handleSubmit={handleUpdate}
                value={updateName}
                setValue={setUpdateName}
              />
              <div className="modal-action">
                <button
                  className="btn btn-outline btn-error"
                  onClick={closeEditModal}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}

        {isDeleteModalOpen && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Delete</h3>
              <p>Are you sure you want to delete {categoryToDelete?.name}?</p>
              <div className="modal-action">
                <button className="btn btn-outline" onClick={handleDelete}>
                  Delete
                </button>
                <button
                  className="btn btn-outline btn-error"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </dialog>
        )}
      </Layout>
    </>
  );
};

export default CreateCategory;

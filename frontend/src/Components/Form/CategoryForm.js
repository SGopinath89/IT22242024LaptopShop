import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter new Category"
            className="input input-bordered w-full max-w-xs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <button className="btn btn-info text-white mt-2 mb-2">Enter</button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;

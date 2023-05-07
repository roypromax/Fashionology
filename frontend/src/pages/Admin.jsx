import React from "react";

const Admin = () => {
  return (
    <div className="admin" style={{ textAlign: "center" }}>
      <h1>Admin Page</h1>

      <table cellSpacing={50}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Sizes</th>
            <th>Quantity</th>
            <th>Color</th>
            <th>MainCategory</th>
            <th>SubCategory</th>
            <th>Images</th>
            <th>Brand</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
};

export default Admin;

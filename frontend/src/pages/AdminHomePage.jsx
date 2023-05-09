import React from "react";

import styled from "styled-components";
import AdminDashboard from "./AdminDashboard";
import Nav from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
const AdminHomePage = () => {
  return (
    <Divform>
      <Nav />
      <DIV>
        <div className="sidebar">
          <AdminSidebar />
        </div>
        <div className="productlist">
          <AdminDashboard />
        </div>
      </DIV>
    </Divform>
  );
};

export default AdminHomePage;

const Divform = styled.div``;

const DIV = styled.div`
  display: flex;

  .productlist {
    width: 85%;
  }
`;

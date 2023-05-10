import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminSidebar from "../../pages/AdminSidebar/AdminSidebar";
import Nav from "../../pages/AdminNavbar";

//https://sleepy-erin-sheep.cyclic.app/users/all

const UsersAdmin = () => {
  const [user, setUser] = useState([]);

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  const getUser = () => {
    axios
      .get(`https://sleepy-erin-sheep.cyclic.app/users/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
<DIVUP>

    <Nav/>

    <DivMain>
    <DIVSide>
        <AdminSidebar/>
    </DIVSide>
      <DIVUser>
        <h1 style={{ textAlign: "center" , color:'#430707'}}>Users Details</h1>
        <table cellSpacing={50}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Password</td>
              <td>Role</td>
              <td>Address</td>
              <td>PhoneNumber</td>
            </tr>
          </thead>
          <tbody>
            {user.map((el) => (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.password}</td>
                <td>{el.role}</td>
                <td>{el.address}</td>
                <td>{el.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DIVUser>
    </DivMain>
    </DIVUP>
  );
};

export default UsersAdmin;

const DIVUP = styled.div``;

const DivMain = styled.div`
display:flex;
width: 100%;
justify-content:space-between;
`;
const DIVSide = styled.div`
/* margin-right:20px; */
`;

const DIVUser = styled.div`
border: 1px solid red;
`;

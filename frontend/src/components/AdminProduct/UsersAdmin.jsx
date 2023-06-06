import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../../pages/AdminNavbar";
import AdminSidebar from "../../pages/AdminSidebar/AdminSidebar";

//https://sleepy-erin-sheep.cyclic.app/users/all

  const UsersAdmin = ({ _id, fnc}) => {
  const [user, setUser] = useState([]);
 

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  const getUser = () => {
    axios
      .get(`https://agile-sweatshirt-worm.cyclic.app/users/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        }
      })
      .then((res) => {
        // console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, [user]);

  //https://sleepy-erin-sheep.cyclic.app/users/delete/${id}

const handleDelete = ( id) => {
  axios.delete(`https://agile-sweatshirt-worm.cyclic.app/users/delete/${id}`, {
    headers: {
      "Content-Type": "application/json",
      " Authorization": `Bearer ${userData.token}`,
    }
  }).then((res)=> {
    console.log(res.data);
    fnc();
  }).catch((err)=>console.log(err))
}
  return (
    <DIVUP>
      <Nav />

      <DivMain>
        <DIVSide>
          <AdminSidebar />
        </DIVSide>
        <DIVUser>
          <h1
            style={{
              textAlign: "center",
              color: "#430707",
              fontWeight: "bold",
              fontSize: "30px",
              margin:'20px 20px',
            }}
          >
            Users Details
          </h1>
          <table cellSpacing={60}>
            <thead style={{marginBottom:'50px', backgroundColor:'pink'}}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody style={{backgroundColor:'lightgray'}}>
              {user.map((el) => (
                <tr key={el.id}>
                  <td
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      // backgroundColor: "lightblue",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {el.name}
                  </td>
                  <td
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      // backgroundColor: "lightgreen",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {el.email}
                  </td>
                  <td
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      // backgroundColor: "rgb(122, 240, 240)",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {el.password}
                  </td>
                  <td
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      // backgroundColor: "lightpink",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {el.role}
                  </td>
                  <td
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      // backgroundColor: "burlywood",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {el.address}
                  </td>
                  <td
                    style={{
                      marginBottom: "10px",
                      marginTop: "10px",
                      // backgroundColor: "rgb(193, 148, 235)",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    {el.phoneNumber}
                  </td>
                  <td style={{ }}>
                    <button  onClick={() => handleDelete(el._id)}>DELETE</button>
                  </td>
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
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const DIVSide = styled.div`
  margin-right: 20px;
`;

const DIVUser = styled.div`
   /* border: 1px solid black; */
  margin-bottom: 20px;
`;

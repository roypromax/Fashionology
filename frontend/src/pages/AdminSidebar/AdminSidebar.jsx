
import "./AdminSidebar.css"
import {
  MdDashboard,
  MdNotificationsNone,
  MdOutlineAddShoppingCart,
} from "react-icons/md";

import {
  AiOutlineUser,
  AiOutlineCreditCard,
  AiOutlineBarChart,
} from "react-icons/ai";

import { RxExit } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/adminhome" style={{ textDecoration: "none" }} >
          <li>
            <MdDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/useradmin" style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineUser className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/adminget" style={{ textDecoration: "none" }}>
            <li>
              <FaStore className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <AiOutlineCreditCard className="icon" />
            <span>Orders</span>
          </li>
          <Link to="/adminpost"
            style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineAddShoppingCart className="icon" />
              <span>Add Products</span>
            </li>
          </Link>

          <p className="title">USEFUL</p>
          <li>
            <AiOutlineBarChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <MdNotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">USER</p>
          <li>
            <CgProfile className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <RxExit className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;

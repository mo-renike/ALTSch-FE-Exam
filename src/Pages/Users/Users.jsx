import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Users.scss";

const Users = () => {

  return (
    <div className="users">

      <div className="users__nav">
        <h4>CLick here to see the list of all the available users</h4>
        <nav className="users__nav-links">
          <Link to="/users/userlist">
            Click me
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Users;

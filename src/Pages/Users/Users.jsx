import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Users.scss";

const Users = () => {

  return (
    <div className="users">
      <h4>CLick the link to see the list of all the available users</h4>

      <nav className="users__nav">
        <Link to="/users/userlist">
          Click me
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Users;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
import UserList from "./UserList";
import "./Users.scss";



const Users = () => {
  const [users, setUsers] = useState([]);

  //implement pagination
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const data = await response.json();
      setUsers(data.results);
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(9);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }


  //cell, gender, email, dob, phone, location, picture, age

  return (
    <div className="users">
      
      <div className="users__nav">
        <nav className="users__nav-links">
          <Link to="/users/men">
            Men
          </Link>
          <Link to="/users/women">
            Women
          </Link>
        </nav>
      </div>
      <UserList currentUsers={currentUsers} />
      <Pagination currentPage={currentPage} paginate={paginate} pageNumbers={pageNumbers} users={users} usersPerPage={usersPerPage} />
    </div>
  );
};

export default Users;

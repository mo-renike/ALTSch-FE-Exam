import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ErrorFallback } from "./Components/ErrorBoundary/ErrorFallback";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import UserList from "./Pages/Users/UserList";
import Users from "./Pages/Users/Users";

function App() {
  // fetch all the data
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
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users" element={<Users />}>
            <Route
              path="userlist"
              element={
                <UserList
                  currentUsers={currentUsers}
                  currentPage={currentPage}
                  paginate={paginate}
                  pageNumbers={pageNumbers}
                  users={users}
                  usersPerPage={usersPerPage}
                />
              }
            />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;

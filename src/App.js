import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Females from "./Pages/Users/Females";
import Males from "./Pages/Users/Males";
import UserDetail from "./Pages/Users/UserDetail";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetail />} />
          <Route path="men" element={<Males />} />
          <Route path="women" element={<Females />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

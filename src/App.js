import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ErrorFallback } from "./Components/ErrorBoundary/ErrorFallback";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Females from "./Pages/Users/Females";
import Males from "./Pages/Users/Males";
// import UserDetail from "./Pages/Users/UserDetail";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users" element={<Users />}>
            <Route path="women" element={<Females />} />
            <Route path="men" element={<Males />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;

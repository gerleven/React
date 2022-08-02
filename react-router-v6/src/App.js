import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import UsersPage from "./Pages/UsersPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./Components/Navbar";
import "./Components/navbar.css";
import UserPage from "./Pages/UserPage";

const ger = () => {
  return "active";
};

const id = 10;

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <NavLink to="/user/10">go to /user/10</NavLink>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/user/:id/:name" element={<UserPage />} />
        <Route path="/others" element={<p>Others!</p>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

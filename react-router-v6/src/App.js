import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import UsersPage from "./Pages/UsersPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

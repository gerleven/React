import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, Navigate } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import UsersPage from "./Pages/UsersPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./Components/Navbar";
import "./Components/navbar.css";
import UserPage from "./Pages/UserPage";


const id = 10;

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <NavLink to="/user/10">go to /user/10</NavLink><br></br>
      <NavLink to="/user/10/Juan">go to /user/10/Juan</NavLink><br></br> */}
      {/* <NavLink to="/users">go to /users</NavLink><br></br>
      <NavLink to="/about">go to /about</NavLink><br></br> */}
      <NavLink to="/usuarios">go to /usuarios</NavLink><br></br>
      <NavLink to="/usuariosSinRetorno">go to /usuarios y sin retorno</NavLink><br></br>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate replace to="/users" />} />       {/* El replace hace que /usuarios sea reemplazado por /users en vez de ser apilado encima, al volver con el navegador volverias al "/"*/}
        <Route path="/usuariosSinRetorno" element={<Navigate to="/users" />} />     {/* <-- Navigate */}
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/user/:id/:name" element={<UserPage />} /> {/* <-- paso de parametros por url */} {/* <-- useParams */}   {/* <-- Link */}
        <Route path="/others" element={<p>Others!</p>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

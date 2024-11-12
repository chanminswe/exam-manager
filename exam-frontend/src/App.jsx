import React from "react";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/auth/AdminLogin";
import Exams from "./pages/students/Exams.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/exams" element={<Exams />} />
      </Routes>
    </>
  );
};

export default App;

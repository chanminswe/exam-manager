import React from "react";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/auth/AdminLogin";
import Warning from "./pages/students/Warning.jsx";
import Exams from "./pages/students/Exams.Jsx";
import Exam from "./pages/students/Exam.jsx";
import Results from "./pages/students/Results.jsx";
import ViewExams from "./pages/management/ViewExams.jsx";
import CreateQuestion from "./pages/management/CreateQuestion.jsx";
import ViewQuestion from "./pages/management/ViewQuestion.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        {/* For admins need to add auth later */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/viewExams" element={<ViewExams />} />
        <Route path="/createQuestion/:examName" element={<CreateQuestion />} />
        <Route path="/viewQuestions/:examName" element={<ViewQuestion />} />
        {/* For admins need to add auth later */}

        {/* For students need to add another auth later */}
        
        <Route path="/exams" element={<Exams />} />
        <Route path="/warning/:examName" element={<Warning />} />
        <Route path="/exam/:examName" element={<Exam />} />
        <Route path="/results" element={<Results />} />
        {/* For students need to add another auth later */}
      </Routes>
    </>
  );
};

export default App;

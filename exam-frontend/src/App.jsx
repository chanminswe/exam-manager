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
      {/* Admin context provider  */}

      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        {/* For admins need to add auth later */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* <Route element={<AdminProtectedRoutes />}> */}
        <Route path="/viewExams" element={<ViewExams />} />
        <Route path="/createQuestion/:examName" element={<CreateQuestion />} />
        <Route path="/viewQuestions/:examName" element={<ViewQuestion />} />
        {/* </Route> */}
        {/* For admins need to add auth later */}

        {/* For users who logged in */}

        <Route path="/exams" element={<Exams />} />
        <Route path="/warning/:examName" element={<Warning />} />
        <Route path="/exam/:examName" element={<Exam />} />
        <Route path="/results" element={<Results />} />
        {/* For  users who logged in  */}
      </Routes>
    </>
  );
};

export default App;

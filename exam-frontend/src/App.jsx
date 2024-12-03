import React from "react";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import AdminLogin from "./pages/auth/AdminLogin";
import Warning from "./pages/students/Warning.jsx";
import Exams from "./pages/students/Exams.Jsx";
import Exam from "./pages/students/exam-part/Exam.jsx";
import Results from "./pages/students/exam-part/Results.jsx";
import ViewExams from "./pages/management/ViewExams.jsx";
import CreateQuestion from "./pages/management/CreateQuestion.jsx";
import ViewQuestion from "./pages/management/ViewQuestion.jsx";
import { ToastContainer } from "react-toastify";
import CreateExam from "./pages/management/CreateExam.jsx";
import ExamTest from "./pages/students/ExamTest.jsx";
import ViewExamResults from "./pages/management/ViewExamResults.jsx";

const App = () => {
  return (
    <>
      {/* Admin context provider  */}
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        {/* For admins need to add auth later */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* <Route element={<AdminProtectedRoutes />}> */}
        <Route path="/viewExams" element={<ViewExams />} />
        <Route path="/createQuestion/:examName" element={<CreateQuestion />} />
        <Route path="/viewQuestions/:examName" element={<ViewQuestion />} />
        <Route path="/viewResults/:examName" element={<ViewExamResults />} />

        {/* </Route> */}
        {/* For admins need to add auth later */}

        {/* For users who logged in */}

        <Route path="/exams" element={<Exams />} />
        <Route path="/warning/:examName/:id" element={<Warning />} />

        <Route path="/exam/:examName/:id" element={<Exam />} />
        <Route
          path="/results/:examName/:studentName/:grade/:marks"
          element={<Results />}
        />
        {/* For  users who logged in  */}
      </Routes>
    </>
  );
};

export default App;

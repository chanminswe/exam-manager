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
import ViewExamResults from "./pages/management/ViewExamResults.jsx";
import ManageUser from "./pages/management/ManageUser.jsx";
import ExamReview from "./pages/students/exam-part/ExamReview.jsx";

const App = () => {
  return (
    <>
      {/* Admin context provider  */}
      <Header />
      <ToastContainer />
      <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        {/* For admin login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* <Route element={<AdminProtectedRoutes />}> */}
        <Route path="/viewExams" element={<ViewExams />} />
        <Route path="/createQuestion/:examName" element={<CreateQuestion />} />
        <Route path="/viewQuestions/:examName" element={<ViewQuestion />} />
        <Route path="/viewResults/:examName" element={<ViewExamResults />} />
        <Route path="/manageUsers" element={<ManageUser />} />

        {/* For users who logged in */}
        <Route path="/exams" element={<Exams />} />
        <Route path="/warning/:examName/:id" element={<Warning />} />
        <Route path="/exam/:examName/:id" element={<Exam />} />
        <Route path="/examReview/:studentName/:examName" element={<ExamReview />}/>
        <Route path="/results/:examName/:studentName/:grade/:marks" element={<Results />}/>

      </Routes>
    </>
  );
};

export default App;

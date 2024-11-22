import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const UserProtectedRoutes = () => {
  const { studentUsername } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (studentUsername === null) {
      navigate("/", { replace: "true" });
    }
  }, [studentUsername, navigate]);

  return null;
};

export default UserProtectedRoutes;

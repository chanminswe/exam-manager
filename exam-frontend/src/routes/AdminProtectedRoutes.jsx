import { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminContextProvider";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoutes = () => {
  const { adminUsername } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (adminUsername === null) {
      navigate("/admin", { replace: true });
    }
  }, [adminUsername, navigate]);

  return null;
};

export default AdminProtectedRoutes;

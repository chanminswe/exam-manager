import React, { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [adminUsername, setAdminUsername] = useState(null);
  return (
    <AdminContext.Provider value={{adminUsername, setAdminUsername}}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;

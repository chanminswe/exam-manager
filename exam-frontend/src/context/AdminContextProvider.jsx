import React, { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  return (
    <AdminContext.Provider value={(username, setUsername)}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;

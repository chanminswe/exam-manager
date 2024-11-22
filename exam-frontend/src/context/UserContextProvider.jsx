import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [studentUsername, setStudentUsername] = useState(null);

  return (
    <UserContext.Provider value={{ studentUsername, setStudentUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

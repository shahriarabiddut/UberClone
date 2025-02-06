import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    fullName: { firstName: "", lastName: "" },
  });
  const contextData = { user, setUser, isLoading, setIsLoading };
  return (
    <>
      <UserDataContext.Provider value={contextData}>
        {children}
      </UserDataContext.Provider>
    </>
  );
};

export default UserContext;

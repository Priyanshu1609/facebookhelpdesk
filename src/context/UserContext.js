import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within an UserProvider");
    }
    return context;
};


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {

        const user = localStorage.getItem("user");
        const accessToken = localStorage.getItem("accessToken");
        if (user) {
            setUser(JSON.parse(user));
        }
        if (accessToken) {
            setAccessToken(JSON.parse(accessToken));
        }
      
    }, [])
    

    console.log({ user });
    console.log({ accessToken });

    const contextValue = {
        user,
        setUser,
        accessToken,
        setAccessToken,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

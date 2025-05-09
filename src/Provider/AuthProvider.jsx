import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState({
        name: "nusrat",
        email: "nmh@gmail.com"
    })

    const authData = {
        user,
        setUser
    }
    return (
        // returning authContext whenever someone calls AuthProvider component

        // using <RouterProvider> inside of authContext as children
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
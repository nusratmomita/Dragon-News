import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { app } from '../Firebase/firebase';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    console.log(user)
    // creating a new user using email and password
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    // saving the created user using onAuth
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe();
        }
    },[])
    const authData = {
        createUser,
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
import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { app } from '../Firebase/firebase';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    // * here we used loading to hold on to the user for PrivateRoute.jsx [see the code] 
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    // console.log(user ,loading)

    // creating a new user using email and password
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    // handle Login functionality
    const Login = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // update the user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData)
    }

    // handle logout functionality
    const LogoutUser = () => {
        return signOut(auth);
    }
    // saving the created user using onAuth
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authData = {
        createUser,
        Login,
        LogoutUser,
        loading,
        setLoading,
        updateUser,
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
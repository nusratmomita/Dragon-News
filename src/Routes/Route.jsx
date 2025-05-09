import {createBrowserRouter} from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import NewsCategory from "../Pages/NewsCategory";
import { Suspense } from "react";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layout/AuthLayout";


  
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path : "/",
                Component: Home
            },
            {
                path : "/category/:id",
                Component: NewsCategory,   
                loader: () => fetch("/news.json")
            },{
                path : "/career",
                element: <h1>Hello , a career page</h1>
            },
            {
                path : "/about",
                element: <h1>Hello , an about page</h1>
            },
            
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
             {
                path: "/auth/register",
                Component: Register
            },
        ]
    },
    {
        path: "/news",
        element: <h1>News route</h1>
    },
    {
        path : "/*", // ! to declare error pages
        element: <h1>Hello , an error 404 page</h1>
    }
    
    
])
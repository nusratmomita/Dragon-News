import {createBrowserRouter} from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import NewsCategory from "../Pages/NewsCategory";
import { Suspense } from "react";

  
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
            {
                path : "/*", // ! to declare error pages
                element: <h1>Hello , an error 404 page</h1>
            }
            
        ]
        
    },
    
    
])
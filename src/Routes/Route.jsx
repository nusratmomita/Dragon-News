import {createBrowserRouter} from "react-router";
import Home from "../Layout/Home";
  
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
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
])
import {createBrowserRouter} from "react-router";
import Home from "../Layout/Home";
  
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
        path : "/auth",
        element: <h1>Hello , an auth page</h1>
    },
    {
        path : "/news",
        element: <h1>Hello , a news page</h1>
    },
    {
        path : "/*", // ! to declare error pages
        element: <h1>Hello , an error 404 page</h1>
    }
])
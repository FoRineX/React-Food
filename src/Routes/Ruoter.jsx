import { createBrowserRouter } from "react-router-dom";

import { Feedback } from "../pages/Feedback";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Category } from "../pages/Category";
import { ErrorPage } from "../pages/Error-page";
import { Recipe } from "../pages/Recipe";

import App from "../App";

export const router = createBrowserRouter([{
    path: '/', 
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
    {
        path: '/feedback',
        element: <Feedback/>
    }, 
    {
        path: '/contacts',
        element: <Contact/>,
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/category/:name',
        element: <Category/>
    },
    {
        path: '/meal/:id',
        element: <Recipe/>
    },
]
}])


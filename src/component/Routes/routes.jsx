import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Homepage/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Singup/Singup";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/login',
                element: <Login />

            }
            ,
            {
                path: '/singup',
                element: <Signup />

            }
        ]
    }
])
export default routes;
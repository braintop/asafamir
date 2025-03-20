import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Projects } from "../pages/Projects/Projects";
import { Recomended } from "../pages/Recomended/Recomended";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/recomended",
                element: <Recomended />,
            },
        ],
    },
]);

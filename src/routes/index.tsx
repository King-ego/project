import {createBrowserRouter} from "react-router-dom";
import Home from "../page/home.tsx";
import Home2 from "../page/home2.tsx";

const Router = createBrowserRouter([
    {
        path: "/project",
        element: <Home/>
    },
    {
        path: "/project/2",
        element: <Home2 />
    }
]);

export default Router;
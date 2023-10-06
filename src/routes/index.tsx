import {createBrowserRouter} from "react-router-dom";
import Index from "../page/home";
import Home2 from "../page/home2.tsx";

const Router = createBrowserRouter([
    {
        path: "/project",
        element: <Index/>
    },
    {
        path: "/project/2",
        element: <Home2 />
    }
]);

export default Router;
import Router from "../routes";
import {RouterProvider} from "react-router-dom";

const Provider = () => {
    return(
        <RouterProvider router={Router} />
    )
}

export default Provider;
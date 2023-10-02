import Router from "../routes";
import {RouterProvider as Provider} from "react-router-dom";

const RouterProvider = () => {
    return(
        <Provider router={Router} />
    )
}

export default RouterProvider;
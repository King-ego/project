import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import Home from "../page/home";
import Login from "../page/admin/login";
import Dashboard from "../page/admin/Dashboard";
import Users from "../page/admin/Users";

import IChildren from "../interface/IChildren";

interface IPrivateRoute extends IChildren {
    redirectTo?: string;
}

const PrivateRoute = ({children, redirectTo = "/project/admin/login"}: IPrivateRoute) => {
    const isAuthenticated = localStorage.getItem("token-api");

    return isAuthenticated ? children : <Navigate to={redirectTo}/> // Verifica se o token existe
};

const LoginRoute = ({children, redirectTo = "/project/admin/app"}: IPrivateRoute) => {
    const isAuthenticated = !localStorage.getItem("token-api");

    return isAuthenticated ? children : <Navigate to={redirectTo}/> // Verifica se o token existe
};


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/project" element={<Home/>}/>
                <Route path="/project/admin/login"
                       element={<LoginRoute children={<Login/>}/>}/>
                <Route path="/project/admin/app"
                       element={<PrivateRoute children={<Dashboard/>}/>}/>
                <Route path="/project/admin/users"
                       element={<PrivateRoute children={<Users/>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;
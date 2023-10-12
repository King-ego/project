import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "../page/home";
import Login from "../page/admin/login";
import Dashboard from "../page/admin/Dashboard";
import IChildren from "../interface/IChildren";

interface IPrivateRoute extends IChildren {
    redirectTo: string;
}

const PrivateRoute = ({children, redirectTo}: IPrivateRoute) => {
    const isAuthenticated = localStorage.getItem("token-api");

    return isAuthenticated ? children : <Navigate to={redirectTo}/> // Verifica se o token existe
};

const LoginRoute = ({children, redirectTo}: IPrivateRoute) => {
    const isAuthenticated = !localStorage.getItem("token-api");

    return isAuthenticated ? children : <Navigate to={redirectTo}/> // Verifica se o token existe
};


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/project" element={<Home/>}/>
                <Route path="/project/admin/login"
                       element={<LoginRoute redirectTo="/project/admin/app" children={<Login/>}/>}/>
                <Route path="/project/admin/app"
                       element={<PrivateRoute redirectTo="/project/admin/login" children={<Dashboard/>}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;
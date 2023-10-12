import {FC, useEffect} from "react"
import IChildren from "../interface/IChildren";
import {useDispatch} from "react-redux";

const AuthProvider:FC<IChildren> = ({children}) => {
    const dispath = useDispatch();
    useEffect(() => {
        dispath({type: "getToken"})
    }, [dispath]);
    return <>{children}</>
}

export default AuthProvider;

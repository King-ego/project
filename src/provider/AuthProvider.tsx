import {FC, useEffect} from "react"
import IChildren from "../interface/IChildren";
import {useDispatch} from "react-redux";

const AuthProvider:FC<IChildren> = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "auth/getToken"})
    }, [dispatch]);
    return <>{children}</>
}

export default AuthProvider;

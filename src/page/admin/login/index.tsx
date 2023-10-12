import {FC} from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";

const Login: FC = ()=> {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const submit = async ():Promise<void> => {
        dispatch({type: "auth/setToken", payload: "ola"})
        navigate("/project/admin/app");

    }
    return (
        <>
            <Link to={"/project"}>2</Link>
            <Button onClick={()=>submit()}>Entrar</Button>
        </>
    )
}

export default Login;
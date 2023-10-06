import {FC} from "react";
import IChildren from "../../interface/IChildren";
import {ButtonStyled} from "./styled";
import {useDispatch} from "react-redux";


const Button: FC<IChildren> = ({children, ...rest}) => {
    const dispatch = useDispatch();
    function TrocarTema() {
        dispatch({type: "theme/switchTheme"})
    }

    return <ButtonStyled onClick={()=>TrocarTema()} {...rest}>{children}</ButtonStyled>
}

export default Button;
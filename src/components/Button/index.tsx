import {FC} from "react";
import IChildren from "../../interface/IChildren";
import {ButtonStyled} from "./styled";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store"

const Button:FC<IChildren> = ({children}) => {
    const {theme: {type}} = useSelector((state: RootState) => state);

    const dispatch = useDispatch();

    function TrocarTema() {
        dispatch({type: "theme/switchTheme"})
    }

    return <ButtonStyled is_theme={type} onClick={()=>TrocarTema()}>{children}</ButtonStyled>
}

export default Button;
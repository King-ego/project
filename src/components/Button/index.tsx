import {FC, ButtonHTMLAttributes, ReactNode} from "react";
import {ButtonStyled} from "./styled";
/*
import {useDispatch} from "react-redux";
*/

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}


const Button: FC<IButtonProps> = ({children, ...rest}) => {
    /*const dispatch = useDispatch();
    *//*function TrocarTema() {
        dispatch({type: "theme/switchTheme"})
    }*/

    return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default Button;
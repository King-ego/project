import {FC, ButtonHTMLAttributes, ReactNode} from "react";
import {ButtonStyled} from "./styled";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}


const Button: FC<IButtonProps> = ({children, ...rest}) => {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default Button;
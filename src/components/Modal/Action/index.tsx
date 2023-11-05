import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import {ActionModal} from "./styled.ts";

interface IAction extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}
const Action:FC<IAction> = ({children, ...rest}) => {
  return <ActionModal {...rest}>{children}</ActionModal>
}

export default Action;
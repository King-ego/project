import {ButtonHTMLAttributes, FC} from "react";
import {ActionModal} from "./styled";
import { IChildren, IColorButton } from "./Action"

interface IAction extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: IChildren;
  bg?: IColorButton;

}
const Action:FC<IAction> = ({children, bg= "initial", ...rest}) => {
  return <ActionModal {...rest} background={bg}>{children}</ActionModal>
}

export default Action;
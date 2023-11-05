import { FC } from "react";

import { ModalContainer } from "./styled";

import IChildren from "../../../interface/IChildren";

interface IContainer extends IChildren{
    visible: boolean;
}
const Container:FC<IContainer> = ({visible, children}) => {
    return visible && (<ModalContainer>{children}</ModalContainer>)
}

export default Container;
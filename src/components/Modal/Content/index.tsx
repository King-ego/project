import { FC } from "react";
import IChildren from "../../../interface/IChildren";
import {ModalContent} from "./styled";

const Content:FC<IChildren> = ({children}) => {
    return <ModalContent>{children}</ModalContent>
}

export default Content;
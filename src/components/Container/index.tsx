import { FC } from "react";
import { Content } from "./styled";
import IChildren from "../../interface/IChildren";

const Container:FC<IChildren> = ({children})=> {
    return (
        <Content>{children}</Content>
    )
}

export default Container;
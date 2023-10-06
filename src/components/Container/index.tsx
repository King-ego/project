import { FC } from "react";
import { Content } from "./styled.ts";
import IChildren from "../../interface/IChildren.ts";

const Container:FC<IChildren> = ({children})=> {
    return (
        <Content>{children}</Content>
    )
}

export default Container;
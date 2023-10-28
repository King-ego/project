import Children from "../../interface/IChildren";
import { FC } from "react";
import Header from "../../components/Header";
import Flex from "../../components/Flex";

const Sidebar:FC<Children> = ({children}) => {
    return (
        <Flex flexDirection={"column"}>
            <Header isPrivateHeader />
            <div>
                {children}
            </div>
        </Flex>
    )
}

export default Sidebar;
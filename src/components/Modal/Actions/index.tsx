import {FC} from "react";
import IChildren from "../../../interface/IChildren";
import Flex from "../../Flex";

const Actions:FC<IChildren> = ({children}) => {
    return <Flex justifyContent="flex-end" gap={12}>{children}</Flex>
}

export default Actions;
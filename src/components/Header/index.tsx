import { FC } from "react";
import HeaderPrivate from "./Private";
import HeaderPublic from "./Public";

interface IHeaderProps {
    isPrivateHeader?: boolean;
}
const Header: FC<IHeaderProps> = ({isPrivateHeader}) => {
    return isPrivateHeader ? <HeaderPrivate /> : <HeaderPublic />
}

export default Header;
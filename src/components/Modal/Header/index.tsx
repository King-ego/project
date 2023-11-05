import { FC } from "react";
import Flex from "../../Flex";

interface IHeader {
  title?: string;
  close: () => void;
}

const Header:FC<IHeader> = ({title = "", close}) => {
  return(
      <Flex justifyContent="space-between">
        <p>{title}</p>
        <div onClick={close}>X</div>
      </Flex>
  )
}

export default Header;
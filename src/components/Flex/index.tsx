import {FC, HTMLAttributes} from "react";
import {Content} from "./styled";
import {children, JustifyContent, AlignItems, FlexDirection} from "./Flex";

interface IFlexProps extends HTMLAttributes<HTMLDivElement> {
    children: children;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    flexDirection?: FlexDirection;
}

const Flex: FC<IFlexProps> = ({children, flexDirection, alignItems, justifyContent, ...rest}) => {
    return <Content jc={justifyContent} fd={flexDirection} ai={alignItems} {...rest}>{children}</Content>
}

export default Flex;
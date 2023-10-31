import {FC, HTMLAttributes} from "react";
import {Content} from "./styled";
import {children, JustifyContent, AlignItems, FlexDirection, Gap} from "./Flex";

interface IFlexProps extends HTMLAttributes<HTMLDivElement> {
    children: children;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    flexDirection?: FlexDirection;
    gap?:Gap
}

const Flex: FC<IFlexProps> = ({children, flexDirection, alignItems, justifyContent, gap= 0, ...rest}) => {
    return <Content gap={gap} jc={justifyContent} fd={flexDirection} ai={alignItems} {...rest}>{children}</Content>
}

export default Flex;
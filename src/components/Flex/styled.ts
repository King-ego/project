import styled from "styled-components";
import {AlignItems, JustifyContent, FlexDirection, Gap} from "./Flex"

interface IFlex {
    ai?: AlignItems;
    jc?: JustifyContent;
    fd?: FlexDirection;
    gap: Gap;
}

export const Content = styled.div<IFlex>`
  display: flex;
  justify-content: ${(props)=>props?.jc || "initial"};
  align-items: ${(props)=>props?.ai || "initial"};
  flex-direction: ${(props)=>props?.fd || "row"};
  gap: ${(props)=>props.gap}px;
`;
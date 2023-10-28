import styled from "styled-components";
import {AlignItems,JustifyContent, FlexDirection} from "./index"

interface IFlex {
    ai?: AlignItems;
    jc?: JustifyContent;
    fd?: FlexDirection;
}

export const Content = styled.div<IFlex>`
  display: flex;
  justify-content: ${(props)=>props?.jc || "initial"};
  align-items: ${(props)=>props?.ai || "initial"};
  flex-direction: ${(props)=>props?.fd || "row"};
`;
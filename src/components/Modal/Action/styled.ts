import styled from "styled-components";
import {IColorButton} from "./Action";

interface IPropsActionModal {
    background: IColorButton;
}

export const ActionModal = styled.button<IPropsActionModal>`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, background})=> theme.button.default[background]};
`;
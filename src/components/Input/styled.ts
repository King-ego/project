import {Field} from "formik";
import styled from "styled-components";

interface IInput {
    error: boolean;
}

export const InputField = styled(Field)<IInput>`
  height: 40px;
  padding-left: 5px;
  width: 100%;
  background: ${({theme})=> theme.reverse_background};
  border: ${({error})=> error ? "1px solid red" : "none"};
`;

export const MessageError = styled.span`
  color: #ff3737;
  font-size: 10px;
`;
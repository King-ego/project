import {Field} from "formik";
import styled from "styled-components";

interface IInput {
    error: boolean;
}

export const InputField = styled(Field)<IInput>`
  height: 40px;
  padding-left: 5px;
  background: ${({theme})=> theme.reverse_background};
  border: ${({error})=> error ? "1px solid red" : "none"};
  
`;
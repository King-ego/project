import styled from "styled-components";

export const ModalContent = styled.div`
  background: ${({theme})=> theme.background};
  border: 1px solid gray;
  width: 100%;
  max-width: 300px;
  padding: 10px;
`;
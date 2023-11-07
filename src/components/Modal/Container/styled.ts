import styled from "styled-components";

export const ModalContainer = styled.div` 
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  z-index: 999;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
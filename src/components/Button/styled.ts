import styled from "styled-components"

export const ButtonStyled = styled.button`
  background: ${({theme}) => theme.button.background};
  color: ${({theme}) => theme.button.color};
`
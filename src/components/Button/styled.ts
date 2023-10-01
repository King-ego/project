import styled from "styled-components"

interface IProps {
    is_theme: "dark"| "light"
}
export const ButtonStyled = styled.button<IProps>`
  background: ${({is_theme, theme}) => theme[is_theme].background};
  color: ${({is_theme, theme}) => theme[is_theme].color};
`
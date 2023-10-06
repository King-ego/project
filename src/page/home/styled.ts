import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContentPage = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  
  width: 100%;
  min-height: 80px;
  background: ${({theme})=> theme.reverse_background};
`;

export const Img = styled.img`
  width: 45px;
  padding: 5px;
  background: #000;
  border-radius: 5px;
`;

export const ActionAnchor = styled.div``;

export const Anchor = styled(Link)``;
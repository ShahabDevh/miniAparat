import styled from "styled-components";

export const Navigation = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  background: #fff;
  display: flex;
  padding: 8px;
  box-shadow: 0 2px 2px #e5e5e5;
`;

export const NavigationBurgerBar = styled.div`
  margin: 12px 12px 0 0;
`;

export const Icon = styled.i`
  font-size: ${props => (props.className.match(/search/g) ? "18px" : "22px")};
  color: #5d5d5d;
  cursor: pointer;

  ${props =>
    props.className.match(/home/g)
      ? ""
      : `:hover {
    color: #4dbced;
  }`}
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

export const MainSidebar = styled.ul`
  position: fixed;
  right: 0;
  top: 61.5px;
  overflow-y: scroll;
  height: 100vh;
  background: #fff;
  padding-bottom: 60px;
  transition: right 0.5s ease-out;

  li {
    padding: 7px 20px;
    display: flex;
    align-items: center;
    text-align: center;
    min-width: 240px;
    min-height: 48px;

    &:hover {
      background: #f5f5f9;
    }
  }

  img {
    width: 28px;
    margin: 0 0 4px 8px;
    background-size: cover;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #5d5d5d;
`;

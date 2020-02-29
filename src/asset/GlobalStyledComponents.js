import styled from "styled-components";

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

export const LoadingScreen = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
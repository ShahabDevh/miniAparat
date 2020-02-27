import styled from "styled-components";

export const Paginate = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  list-style-type: none;
  width: 100%;
  margin-top 12px;
  
  li {
    margin: 0 8px;

    span {
      font-size: 20px;
      margin: 2px 4px 0 4px;
    }
  }

  a {
    text-decoration: none;
    color: #1a1919;

    &:hover {
      color: #5d5d5d;
    }
  }
`;

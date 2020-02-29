import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-right: 410px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f5f5f9;
  width: 500px;
  padding: 5px 12px;
  border-radius: 12px;
  border: 2px solid #fff;
  transition: background 0.4s ease-in-out;

  &:hover {
    border: 2px solid #e5e5e5;
    background: #fff;
  }

  &:focus {
    border: 2px solid #e5e5e5;
    background: #fff;
  }

  input {
    background: transparent;
    border: none;
    font-family: IRANSans;
    width: 450px;
    outline: none;
  }
`;

// export const Input = styled.input`
//   background: transparent;
//   border: none;
//   font-family: IRANSans;
//   width: 450px;
//   outline: none;
// `;

export const SubmitButton = styled.button`
  border: none;
  background: transparent;
  margin-top: 6px;
  outline: none;
`;

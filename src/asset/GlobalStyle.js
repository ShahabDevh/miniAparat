import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "IRANSans";
  src: url("../../public/font/IRANSans_0.ttf?family=IRANSans");
}
 
body {  
  direction: rtl; 
  font-family: "IRANSans";

  iframe {
    border: none;
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 18px;
    background-color: #5d5d5d;
    outline: 1px solid #708090;
  }
}
`;

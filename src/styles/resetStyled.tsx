import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

button {
    cursor: pointer;
  }

li {
    list-style: none;
  }

a {
    text-decoration: none;
  }

@media (width:798px) {
 * {
    font-size: 60.5%;
  } 
}
`;

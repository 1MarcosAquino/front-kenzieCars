import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

.container {
  width: 90%;
  max-width: 1300px;
}

.container {
  margin: 0 auto;
  width: 90%;
  max-width: 1300px;
}

:root {
  --brand-1: #4529E6;
  --brand-2: #5126EA;
  --brand-3: #B0A6F0;
  --brand-4: #EDEAFD;

  --Gray-0: #0B0D0D;
  --Gray-1: #212529;
  --Gray-2: #495057;
  --Gray-3: #868E96;
  --Gray-4: #ADB5BD;
  --Gray-5: #CED4DA;
  --Gray-6: #DEE2E6;
  --Gray-7: #E9ECEF;
  --Gray-8: #F1F3F5;
  --Gray-9: #F8F9FA;
  --Gray-10: #FDFDFD;
  --whitFixed: #fff;

  --alert-1: #CD2B31;
  --alert-2: #FDD8D8;
  --alert-3: #FFE5E5;
  --success-1: #18794E;
  --success-2: #CCEBD7;
  --success-3: #DDF3E4;

  --random-1: #E34D8C;
  --random-2: #C04277;
  --random-3: #7D2A4D;
  --random-4: #7000FF;
  --random-5: #6200E3;
  --random-6: #36007D;
  --random-7: #349974;
  --random-8: #2A7D5F;
  --random-9: #153D2E;
  --random-10: #6100FF;
  --random-11: #5700E3;
  --random-12: #30007D;

  --body-1-400: 400;
  --body-1-600: 600;

  --body-2-600: 400;
  --body-2-500: 500;

  --button-big-text: bold;
  --button-medium-text: bolder;
  --input-placeholder: large;
  --input-label: bold;
}
`;

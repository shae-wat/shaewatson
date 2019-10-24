import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const AppMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #282c34;

  // non-prod CSS guardrails
  ${() => {
    if (process.env.NODE_ENV !== 'production') {
      /* Accessibility: All imgs must have an alt attribute,
       * see https://webaim.org/techniques/alttext/
       */
      return `
        img:not([alt]) {
          border: 5px dashed red !important;
        }
      `;
    } else {
      return ``;
    }
  }}
`;

const AppHeader = styled.header`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 10vh;
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-left: 16px;
  > * {
    margin-right: 16px;
  }
`;

const App: React.FC = () => {
  return (
    <AppMain>
      <AppHeader>
        <img src={logo} height={40} alt="logo" />
        <p>Shae Watson</p>
      </AppHeader>
    </AppMain>
  );
};

export default App;

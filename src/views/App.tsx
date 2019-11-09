import React from 'react';
import styled from 'styled-components';
import { gutter } from '../styles';
import logo from '../images/logo.svg';
import { CurrentWorkPage } from './pages';

const AppMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #282c34;
  min-height: 100vh;

  /* non-prod CSS guardrails */
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 10vh;
  font-size: calc(10px + 2vmin);
  color: white;

  margin-left: ${gutter}px;
  > * {
    margin-right: ${gutter}px;
  }
`;

const App: React.FC = () => {
  return (
    <AppMain>
      <AppHeader>
        <img src={logo} height={40} alt="logo" />
        <p>Shae Watson</p>
        <CurrentWorkPage />
      </AppHeader>
    </AppMain>
  );
};

export default App;

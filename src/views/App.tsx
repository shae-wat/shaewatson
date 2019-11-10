import React from 'react';
import styled from 'styled-components';
import { gutter, Colors } from '../styles';
import logo from '../images/logo.svg';
import { FeaturedWorkPage } from './pages';

const HEADER_HEIGHT = 10;

const AppMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.background};
  color: ${Colors.white}
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
  min-height: ${HEADER_HEIGHT}vh;
  font-size: calc(10px + 2vmin);

  margin-left: ${gutter(1)}px;
  > * {
    margin-right: ${gutter(1)}px;
  }
`;

const PageContainer = styled.div`
  min-height: ${100 - HEADER_HEIGHT}vh;
`;

const App: React.FC = () => {
  return (
    <AppMain>
      <AppHeader>
        <img src={logo} height={40} alt="logo" />
        <p>Shae Watson</p>
      </AppHeader>
      <PageContainer>
        <FeaturedWorkPage />
      </PageContainer>
    </AppMain>
  );
};

export default App;

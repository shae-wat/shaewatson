import React from 'react';
import styled from 'styled-components';
import { gutter, Colors, HeaderFont, CONTENT_MAX_WIDTH } from '../styles';
import { ReactLogoImageSrc } from '../images';
import { FeaturedWorkPage } from './pages';
import SocialIconGroup from './components/SocialIconGroup';

const HEADER_HEIGHT = 10;

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.background};
  color: ${Colors.white}
  min-height: 100vh;
  width: 100%;

  margin-right: auto;
  margin-left: auto;

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
  background-color: ${Colors.footerBackground};

  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 ${gutter(1)}px;
  > * {
    margin-right: ${gutter(1)}px;
  }
`;

const Main = styled.main`
  min-height: ${100 - HEADER_HEIGHT}vh;
`;

const AppFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: ${HEADER_HEIGHT * 3}vh;
  background-color: ${Colors.footerBackground};

  width: 100%;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 ${gutter(1)}px;
  > * {
    margin-right: ${gutter(1)}px;
  }
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <div>
        <AppHeader>
          <img src={ReactLogoImageSrc} height={40} alt="logo" />
          <HeaderFont>Shae Watson</HeaderFont>
          <SocialIconGroup />
        </AppHeader>
        <Main>
          <FeaturedWorkPage />
        </Main>
      </div>
      <AppFooter>
        <SocialIconGroup />
      </AppFooter>
    </AppContainer>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import { Colors, HEADER_HEIGHT } from 'styles';
import { FeaturedWorkPage } from 'views/pages';
import Header from 'views/components/Header';
import Footer from 'views/components/Footer';

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.background};
  color: ${Colors.white}
  min-height: 100vh;
  min-width: 100%;

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

const Main = styled.main`
  min-height: ${100 - HEADER_HEIGHT}vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <div>
        <Header />
        <Main>
          <FeaturedWorkPage />
        </Main>
      </div>
      <Footer />
    </AppContainer>
  );
};

export default App;

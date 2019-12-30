import React from 'react';
import styled from 'styled-components';
import {
  gutter,
  rhythm,
  Colors,
  HeaderFont,
  CONTENT_MAX_WIDTH,
  ParagraphFont,
  SubheaderFont,
  LinkText,
  mobileMediaQuery,
  tabletMediaQuery,
} from '../styles';
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

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: ${HEADER_HEIGHT}vh;
  background-color: ${Colors.footerBackground};

  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;

  padding: 0 ${gutter(1)}px;
  border-radius: 0 0 4px 4px;
`;

const AppTitle = styled.span`
  display: flex;
  justify-content: row;
  align-items: center;
  > * {
    margin-right: ${gutter(1)}px;
    ${mobileMediaQuery(`margin-right: ${gutter(1 / 2)}px;`)}
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

  position: relative;
  max-width: ${CONTENT_MAX_WIDTH}px;
  margin-right: auto;
  margin-left: auto;

  padding: ${rhythm(2)}px ${gutter(2)}px;
  border-radius: 4px 4px 0 0;
  ${tabletMediaQuery(
    `flex-direction: column; padding: ${rhythm(2)}px ${gutter(1 / 2)}px;`,
  )}
  > * {
    padding-right: ${gutter(1)}px;
    width: 30%;
    ${tabletMediaQuery(
      `padding-right: 0; padding-bottom: ${rhythm(1)}px; width: 85%;`,
    )}
  }
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin-top: ${rhythm(1)}px;
  }
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <div>
        <AppHeader>
          <AppTitle>
            <img src={ReactLogoImageSrc} height={40} alt="logo" />
            <HeaderFont>Shae Watson</HeaderFont>
          </AppTitle>
          <SocialIconGroup />
        </AppHeader>
        <Main>
          <FeaturedWorkPage />
        </Main>
      </div>
      <AppFooter>
        <SocialIconGroup />
        <div>
          <SubheaderFont>Tech stack used for this site:</SubheaderFont>
          <ParagraphFont>
            <LinkText
              color={Colors.lightBlue}
              href="https://github.com/facebook/create-react-app"
              target="_blank"
              rel="noopener noreferrer">
              Create React App
            </LinkText>
          </ParagraphFont>
          <ParagraphFont>Node / Webpack / Babel</ParagraphFont>
          <ParagraphFont>Typescript</ParagraphFont>
          <ParagraphFont>React.js</ParagraphFont>
        </div>
        <FooterSection>
          <SubheaderFont>Handmade by Shae Watson</SubheaderFont>
          <SubheaderFont>2020</SubheaderFont>
          <ParagraphFont>
            This website and representation of my work for companies does not
            reflect or represent the opinions or plans of those companies.
          </ParagraphFont>
          <ParagraphFont>
            The public code for this website can be found{' '}
            <LinkText
              color={Colors.lightBlue}
              href="https://github.com/shae-wat/shaewatson"
              target="_blank"
              rel="noopener noreferrer">
              {' here'}
            </LinkText>
            . I am always open to feedback or a heads-up for a better way to do
            something or a bug I missed, email me at{' '}
            <LinkText
              color={Colors.lightBlue}
              href="mailto:shae@shaewatson.com"
              target="_blank"
              rel="noopener noreferrer">
              shae@shaewatson.com
            </LinkText>
            .
          </ParagraphFont>
          <ParagraphFont>
            This website represents my personal perferences and current
            understanding of the ideal code, architecture, and design for a
            scalable React.js web app. I picked the colors!
          </ParagraphFont>
        </FooterSection>
      </AppFooter>
    </AppContainer>
  );
};

export default App;

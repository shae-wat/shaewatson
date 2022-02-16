import React from 'react';
import styled from 'styled-components';
import {
  rhythm,
  Colors,
  tabletMediaQuery,
  gutter,
  CONTENT_MAX_WIDTH,
  HEADER_HEIGHT,
  ParagraphFont,
  SubheaderFont,
  LinkText,
} from 'styles';
import SocialIconGroup from 'views/components/SocialIconGroup';

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

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin-top: ${rhythm(1)}px;
  }
`;

const Footer: React.FC = () => {
  return (
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
      <DetailsSection>
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
          . This website represents my personal preferences and current
          understanding of the ideal code, architecture, and design for a
          scalable React.js web app.
        </ParagraphFont>
      </DetailsSection>
    </AppFooter>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import {
  Colors,
  gutter,
  CONTENT_MAX_WIDTH,
  mobileMediaQuery,
  HeaderFont,
  HEADER_HEIGHT,
} from 'styles';
import SocialIconGroup from 'views/components/SocialIconGroup';
import { ReactLogoImageSrc } from 'images';

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

const Header: React.FC = () => {
  return (
    <AppHeader>
      <AppTitle>
        <img src={ReactLogoImageSrc} height={40} alt="logo" />
        <HeaderFont>Shae Watson</HeaderFont>
      </AppTitle>
      <SocialIconGroup />
    </AppHeader>
  );
};

export default Header;

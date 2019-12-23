import styled from 'styled-components';
import { mobileMediaQuery } from './breakpoints';

export const FontCSS = `
  letter-spacing: 0.08px;
  word-break: keep-all; /* dont split a word */
  word-spacing: 1px;
  text-decoration: none;
  font-style: normal;
  font-stretch: normal;
  /* dont allow user-agent stylesheet to set margins */
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
`;

export const HeaderFont = styled.h1`
  ${FontCSS}
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;

  ${mobileMediaQuery(`font-size: 18px; line-height: 26px;`)}
`;

export const SubheaderFont = styled.h2`
  ${FontCSS}
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;

  ${mobileMediaQuery(`font-size: 16px; line-height: 20px;`)}
`;

export const ParagraphFont = styled.p`
  ${FontCSS}
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  ${mobileMediaQuery(`font-size: 14px; line-height: 18px;`)}
`;

export const MicroFont = styled.p`
  ${FontCSS}
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  ${mobileMediaQuery(`font-size: 12px; line-height: 14px;`)}
`;

import styled, { css } from 'styled-components';
import { mobileMediaQuery } from './breakpoints';

export const FontCSS = css`
  letter-spacing: 0px;
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

  ${mobileMediaQuery(`font-size: 20px; line-height: 28px;`)}
`;

export const ParagraphFont = styled.p`
  ${FontCSS}
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  ${mobileMediaQuery(`font-size: 14px; line-height: 18px;`)}
`;

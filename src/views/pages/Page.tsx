import React from 'react';
import styled from 'styled-components';
import {
  gutter,
  column,
  rhythm,
  mobileMediaQuery,
  tabletMediaQuery,
} from '../../styles';

export const PageTitleLayout = styled.div`
  margin-bottom: ${rhythm(3 / 2)}px;
`;

export const PageSection = styled.div`
  &:not(:last-child) {
    margin-bottom: ${rhythm(2)}px;

    ${mobileMediaQuery(`
      margin-bottom: ${rhythm(1)}px;
    `)};
  }
`;

export const PageSectionTitleLayout = styled.div`
  margin-bottom: ${rhythm(1 / 2)}px;
`;

export const PageTitleChildLayout = styled.div`
  margin-bottom: ${rhythm(1 / 4)}px;
`;

export const PageSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(5 / 6)}px;

  ${mobileMediaQuery(`
    margin-bottom: ${rhythm(1 / 2)}px;
  `)};
`;

// uniform space between elements in a section
export const PageSectionElementLayout = styled.div`
  > * {
    margin-bottom: ${rhythm(3 / 4)}px;
  }
`;

interface PageProps {
  children: React.ReactNode;
  maxWidth?: number;
}

const StyledPage = styled.section`
  position: relative;
  max-width: ${column(12) + gutter(11)}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(2)}px ${column(1) + gutter(1)}px ${rhythm(3)}px
    ${column(1) - gutter(1)}px;

  ${({ maxWidth }: PageProps) => (maxWidth ? `max-width: ${maxWidth}px;` : ``)};

  ${tabletMediaQuery(
    `padding: ${rhythm(2)}px ${gutter(2)}px ${rhythm(3)}px ${gutter(2)}px;`,
  )};
  ${mobileMediaQuery(`padding: ${rhythm(3 / 2)}px ${gutter}px;`)};
`;

export const Page = (props: PageProps) => (
  <StyledPage maxWidth={props.maxWidth}>{props.children}</StyledPage>
);

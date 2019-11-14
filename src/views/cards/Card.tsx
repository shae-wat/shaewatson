import styled from 'styled-components';
import { rhythm, gutter, Colors, tabletMediaQuery } from '../../styles';

export const Card = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  ${tabletMediaQuery(`flex-direction: column;`)}
  justify-content: space-between;
  background-color: ${Colors.cardBackground};
  border-radius: 4px;

  padding: ${rhythm(2 / 3)}px ${gutter(1 / 3)}px;

  > *:first-child {
    display: flex;
    align-items: center;
    position: relative;
    width: 60%;
    ${tabletMediaQuery(`width: auto;`)}
  }
  > *:last-child {
    display: flex;
    align-items: center;
    position: relative;
    width: 40%;
    ${tabletMediaQuery(`width: auto;`)}
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${rhythm(1)}px ${gutter(1)}px ${rhythm(2 / 3)}px ${gutter(2)}px;

  ${tabletMediaQuery(`padding: ${rhythm(1)}px ${gutter(1)}px`)}

  > *:first-child {
    margin-bottom: ${rhythm(1)}px;
    ${tabletMediaQuery(`margin-bottom: ${rhythm(2 / 3)}px;`)}
  }
  > *:not(:first-child) {
    margin-bottom: ${rhythm(1 / 2)}px;
    ${tabletMediaQuery(`margin-bottom: ${rhythm(1 / 4)}px;`)}
  }
`;

export const CardImageContent = styled.div``;

// ${(props: { rightPercentage: number; leftPercentage: number }) => {
//   return `
//     right: ${props.rightPercentage};
//     left: ${props.leftPercentage};
//   `;
// }}

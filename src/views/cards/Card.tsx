import _ from 'lodash';
import styled from 'styled-components';
import { rhythm, gutter, Colors } from '../../styles';

export const Card = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${Colors.cardBackground};
  border-radius: 4px;

  padding: ${rhythm(2 / 3)}px ${gutter(1)}px;

  > *:first-child {
    width: 60%;
  }
  > *:last-child {
    width: 40%;
  }
`;

export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${rhythm(1)}px ${gutter(1)}px ${rhythm(2 / 3)}px ${gutter(2)}px;
`;

// ${(props: { rightPercentage: number; leftPercentage: number }) => {
//   return `
//     right: ${props.rightPercentage};
//     left: ${props.leftPercentage};
//   `;
// }}

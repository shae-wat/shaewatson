import _ from 'lodash';
import styled from 'styled-components';
import { rhythm, gutter, Colors } from '../../styles';

export const StyledCard = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  background-color: ${Colors.cardBackground};
  border-radius: 4px;

  padding: ${rhythm(2 / 3)}px ${gutter(1)}px;
`;

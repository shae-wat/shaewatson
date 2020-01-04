import styled from 'styled-components';
import { gutter, rhythm } from './constants';

const LogoSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${rhythm(1 / 3)}px;

  > h2 {
    align-self: center;
  }

  > img {
    align-self: center;
    border-radius: 8px;
    margin-right: ${gutter(1 / 2)}px;
  }
`;

export default LogoSubtitle;

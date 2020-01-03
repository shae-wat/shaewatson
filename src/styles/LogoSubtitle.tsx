import styled from 'styled-components';
import { gutter } from './constants';

const LogoSubtitle = styled.div`
  display: flex;
  flex-direction: row;

  > h2 {
    margin-left: ${gutter(1 / 2)}px;
    align-self: center;
  }

  > img {
    border-radius: 8px;
  }
`;

export default LogoSubtitle;

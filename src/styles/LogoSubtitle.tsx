import styled from 'styled-components';
import { gutter } from './constants';

const LogoSubtitle = styled.div`
  display: flex;
  flex-direction: row;

  > h2 {
    align-self: center;
  }

  > img {
    border-radius: 8px;
    margin-right: ${gutter(1 / 2)}px;
  }
`;

export default LogoSubtitle;

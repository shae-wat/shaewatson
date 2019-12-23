import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { gutter, rhythm, MicroFont } from '../../styles';

const colors = ['#babfff', '#1414cc', '#e5c1bf', '#ffb6c1', '#fa225b'];

const ColorPallette = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${rhythm(1 / 2)}px 0;
  > *:not(:last-child) {
    margin-right: ${gutter(1)}px;
  }
`;

const Square = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  cursor: pointer;
`;

class ColorSelector extends React.Component {
  render() {
    return (
      <div>
        <MicroFont>Select a color:</MicroFont>
        <ColorPallette>
          {_.map(colors, (color: string) => (
            <Square style={{ backgroundColor: color }} />
          ))}
        </ColorPallette>
      </div>
    );
  }
}

export default ColorSelector;

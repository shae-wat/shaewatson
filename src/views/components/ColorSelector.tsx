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

interface ColorSelectorProps {
  onColorClick: (color: typeof colors[0]) => void;
  selectedColor: typeof colors[0];
}

const ColorSelector: React.FC<ColorSelectorProps> = (
  props: ColorSelectorProps,
) => (
  <div>
    <MicroFont>
      Here is the color-customizable dropdown menu in action!
    </MicroFont>
    <ColorPallette>
      {_.map(colors, (color: typeof colors[0]) => (
        <Square
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => props.onColorClick(color)}
        />
      ))}
    </ColorPallette>
  </div>
);

export default ColorSelector;

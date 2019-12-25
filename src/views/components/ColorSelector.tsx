import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { gutter, rhythm, MicroFont, Colors, BoldText } from '../../styles';

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
  onColorClick: (color: typeof Colors.millenialPink) => void;
  selectedColor: typeof Colors.millenialPink;
  options: Array<typeof Colors.millenialPink>;
}

const ColorSelector: React.FC<ColorSelectorProps> = (
  props: ColorSelectorProps,
) => (
  <div>
    <MicroFont>
      Here is the{' '}
      <BoldText color={props.selectedColor}>
        color-customizable dropdown menu
      </BoldText>{' '}
      in action!
    </MicroFont>
    <ColorPallette>
      {_.map(props.options, (color: typeof Colors.millenialPink) => (
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

import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Colors, column, gutter, rhythm, FontCSS } from '../../styles';

export enum DropdownOptionKey {
  HIGHEST_RATED,
  NEWEST_FIRST,
  MOST_REACTIONS,
  MOST_DISAGREED,
}

interface DropdownOption {
  label: string;
  value: DropdownOptionKey;
}

interface DropdownProps {
  options: DropdownOption[];
}

interface DropdownState {
  open: boolean;
}

const StyledDropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
  width: 100%;
  max-width: ${column(3) + gutter(4)}px;

  &:after {
    position: absolute;
    right: ${gutter(1)}px;
    top: ${rhythm(1 / 2) + 1}px;
    ${FontCSS}
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: ${Colors.white};

    content: '<>';
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;

const StyledSelect = styled.div`
  width: 100%;
  padding: ${rhythm(1 / 2)}px ${gutter(1)}px;

  color: transparent;
  text-shadow: 0 0 0 ${Colors.white};
  border: 2px solid #ddd;
  border-radius: 4px;

  ${FontCSS}
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const StyledOption = styled.div`
  width: 100%;
  padding: ${rhythm(1 / 4)}px ${gutter(1 / 4)}px;

  &:hover {
    background-color: red;
  }
`;

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  state = { open: false, selectedOption: DropdownOptionKey };

  render() {
    const { options } = this.props;
    return (
      <StyledDropdownContainer>
        <StyledSelect>
          {_.map(options, (option: DropdownOption) => {
            return (
              <StyledOption key={option.value}>{option.label}</StyledOption>
            );
          })}
        </StyledSelect>
      </StyledDropdownContainer>
    );
  }
}

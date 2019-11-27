import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Colors, column, gutter, rhythm } from '../../styles';

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

const StyledDropdown = styled.select`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  max-width: ${column(3) + gutter(4)}px;
  padding: ${rhythm(1 / 2)}px ${gutter(1)}px;

  border: 2px solid #ddd;
  border-radius: 4px;
  color: ${Colors.white};

  /* override default input styles */
  outline: none;
  background-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  state = { open: false, selectedOption: DropdownOptionKey };

  render() {
    const { options } = this.props;
    return (
      <StyledDropdown>
        {_.map(options, (option: DropdownOption) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </StyledDropdown>
    );
  }
}

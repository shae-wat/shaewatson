import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Colors, column, gutter, rhythm, FontCSS } from '../../styles';

export enum DropdownOptionKey {
  HIGHEST_RATED,
  NEWEST_FIRST,
  MOST_REACTIONS,
  MOST_DISAGREED,
  OLDEST_FIRST,
}

interface DropdownOption {
  label: string;
  value: DropdownOptionKey;
}

const StyledSelect = styled.div`
  position: relative;
  width: ${column(3) + gutter(4)}px;
  cursor: pointer;

  color: ${Colors.background};
  background-color: ${Colors.white};
  border: 2px solid #ddd;
  border-radius: 4px;

  ${FontCSS}
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  ${({ open }: { open: boolean }) => {
    return !open
      ? `&:after {
          position: absolute;
          right: ${gutter(1)}px;
          top: ${rhythm(1 / 2) + 1}px;
          ${FontCSS}
          font-weight: 500;
          font-size: 14px;
          line-height: 28px;
          color: ${Colors.cardBackground};

          content: '<>';
          -webkit-transform: rotate(90deg);
          -moz-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
        }`
      : '';
  }}
`;

const StyledOption = styled.div`
  flex: 1;
  padding: ${rhythm(1 / 4)}px ${gutter(1 / 4)}px;

  ${({ selected, opened }: { selected?: boolean; opened?: boolean }) => {
    return opened
      ? ` &:hover {
      background-color: red;
    }`
      : selected
      ? 'background-color: red;'
      : '';
  }}
`;

interface DropdownProps {
  options: DropdownOption[];
}

interface DropdownState {
  open: boolean;
  selectedOption: DropdownOptionKey;
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  state = { open: false, selectedOption: DropdownOptionKey.HIGHEST_RATED };

  getOptionByKey(key: DropdownOptionKey) {
    const { options } = this.props;
    console.log('options', _.keyBy(options, 'value'));
    const keyedOptions = _.keyBy(options, 'value');
    return keyedOptions[key] || options[0];
  }

  onOptionClick(selectedOption: DropdownOptionKey) {
    console.log('onClick');
    this.setState({
      selectedOption,
    });
  }

  render() {
    const { options } = this.props;

    const selected = this.getOptionByKey(this.state.selectedOption);
    console.log('selected', selected);
    return (
      <StyledSelect
        open={this.state.open}
        onMouseEnter={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}>
        {this.state.open ? (
          _.map(options, (option: DropdownOption) => {
            return (
              <StyledOption
                key={option.value}
                opened
                onClick={() => this.onOptionClick(option.value)}
                selected={this.state.selectedOption === option.value}>
                {option.label}
              </StyledOption>
            );
          })
        ) : (
          <StyledOption key={selected.value}>{selected.label}</StyledOption>
        )}
      </StyledSelect>
    );
  }
}

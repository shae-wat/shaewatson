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
  height: ${rhythm(1)}px;
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

const StyledOptionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
`;

const StyledOption = styled.div`
  flex: 1;
  padding: ${rhythm(1 / 4)}px ${gutter(1 / 4)}px;
  color: ${Colors.background};
  background-color: ${Colors.white};

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
    const keyedOptions = _.keyBy(this.props.options, 'value');
    return keyedOptions[key] || this.props.options[0];
  }

  render() {
    const { options } = this.props;

    const selected = this.getOptionByKey(this.state.selectedOption);
    return (
      <StyledSelect
        open={this.state.open}
        onMouseEnter={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}>
        {this.state.open ? (
          <StyledOptionsContainer>
            {_.map(options, (option: DropdownOption) => {
              return (
                <StyledOption
                  key={option.value}
                  opened
                  onClick={() =>
                    this.setState({
                      selectedOption: option.value,
                      open: false,
                    })
                  }
                  selected={this.state.selectedOption === option.value}>
                  {option.label}
                </StyledOption>
              );
            })}
          </StyledOptionsContainer>
        ) : (
          <StyledOption key={selected.value}>{selected.label}</StyledOption>
        )}
      </StyledSelect>
    );
  }
}

import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import {
  Colors,
  column,
  gutter,
  rhythm,
  FontCSS,
  mobileMediaQuery,
  desktopMediaQuery,
  finalSqueezeQuery,
} from 'styles';

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
  height: ${rhythm(3 / 2)}px;
  width: ${column(3) + gutter(2)}px;
  ${finalSqueezeQuery(`width: ${column(3)}px;`)}
  cursor: pointer;

  ${({ open }: { open: boolean }) => {
    return !open
      ? `
        border: 2px solid ${Colors.border};
        border-radius: 4px;

        &:after {
          position: absolute;
          right: ${gutter(1)}px;
          top: ${rhythm(1 / 6)}px;
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
      : `height: ${rhythm(3 / 2) + 4}px;`;
  }}
`;

const StyledOptionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid ${Colors.border};
  border-radius: 4px;
  z-index: 100;

  > *:first-child {
    border-radius: 2px 2px 0 0;
  }
  > *:last-child {
    border-radius: 0 0 2px 2px;
  }
`;

const StyledOption = styled.div`
  flex: 1;
  padding: ${rhythm(1 / 4)}px ${gutter(1 / 4)}px;
  color: ${Colors.background};
  background-color: ${Colors.white};

  ${FontCSS}
  font-weight: 500;
  font-size: 16px;
  line-height: ${rhythm(1)}px;

  ${({
    opened,
    color,
    selected,
  }: {
    opened?: boolean;
    color?: string;
    selected?: boolean;
  }) => {
    return opened
      ? `
        z-index: 100;
        ${desktopMediaQuery(`&:hover {
          background-color: ${color};
          color: ${Colors.white};
        }`)}
        ${mobileMediaQuery(
          selected
            ? `
              background-color: ${color};
              color: ${Colors.white};
            `
            : '',
        )}
        `
      : 'border-radius: 2px;';
  }}
`;

interface DropdownProps {
  options: DropdownOption[];
  color: string;
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
    const { options, color } = this.props;

    const selected = this.getOptionByKey(this.state.selectedOption);
    return (
      <StyledSelect
        open={this.state.open}
        onClick={() => this.setState({ open: !this.state.open })}
        onMouseLeave={() => this.setState({ open: false })}>
        {this.state.open ? (
          <StyledOptionsContainer
            onMouseLeave={() => this.setState({ open: false })}>
            {_.map(options, (option: DropdownOption) => {
              return (
                <StyledOption
                  key={option.value}
                  opened
                  color={color}
                  selected={this.state.selectedOption === option.value}
                  onClick={() =>
                    this.setState({
                      selectedOption: option.value,
                    })
                  }>
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

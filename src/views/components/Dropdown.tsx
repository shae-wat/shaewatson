import React from 'react';
import styled from 'styled-components';

enum DropdownOption {
  HIGHEST_RATED,
  NEWEST_FIRST,
  MOST_REACTIONS,
  MOST_DISAGREED,
}

interface DropdownState {
  open: boolean;
}

const StyledDropdown = styled.div`
  display: block;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 250px;
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 12px;
`;

class Dropdown extends React.Component<{}, DropdownState> {
  state = { open: false, selectedOption: DropdownOption };

  render() {
    return <StyledDropdown>Hello Dropdown!</StyledDropdown>;
  }
}

export default Dropdown;

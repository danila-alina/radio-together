import React from 'react';

import {
  StyledMenu, Title,
  MenuList, MenuItem,
} from './SideMenu.styled';

class SideMenu extends React.Component {
  render() {
    return (
      <StyledMenu>
        <Title>Radio Together</Title>
        <MenuList>
          <MenuItem selected>Home</MenuItem>
          <MenuItem>My Music</MenuItem>
          <MenuItem>Recommendations</MenuItem>
        </MenuList>
      </StyledMenu>
    );
  }
}

export default SideMenu;

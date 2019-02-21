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
          <MenuItem to="/" activeClassName="selectedItem" exact>
            Home
          </MenuItem>
          <MenuItem to="/my-music" activeClassName="selectedItem" exact>
            My Music
          </MenuItem>
          <MenuItem to="/recommendations" activeClassName="selectedItem" exact>
            Recommendations
          </MenuItem>
        </MenuList>
      </StyledMenu>
    );
  }
}

export default SideMenu;

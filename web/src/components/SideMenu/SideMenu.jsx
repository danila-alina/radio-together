import React from 'react';

import CurrentTrack from './components/CurrentTrack';

import * as SC from './SideMenu.styled';

class SideMenu extends React.Component {
  render() {
    return (
      <SC.StyledMenu>
        <SC.Title>Radio Together</SC.Title>
        <SC.MenuList>
          <SC.MenuItem to="/" activeClassName="selectedItem" exact>
            Home
          </SC.MenuItem>
          <SC.MenuItem to="/my-music" activeClassName="selectedItem" exact>
            My Music
          </SC.MenuItem>
          <SC.MenuItem to="/recommendations" activeClassName="selectedItem" exact>
            Recommendations
          </SC.MenuItem>
        </SC.MenuList>
        <CurrentTrack />
      </SC.StyledMenu>
    );
  }
}

export default SideMenu;

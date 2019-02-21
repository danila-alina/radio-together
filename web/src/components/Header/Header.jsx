import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  StyledHeader, Search, StyledNavLink,
  AvatarContainer, UserName, Avatar,
} from './Header.styled';

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Search placeholder="Search for music, people, radiostations" />
        <AvatarContainer>
          <StyledNavLink to="/my-account">
            <UserName>Alina Arlova</UserName>
          </StyledNavLink>
          <NavLink to="/my-account">
            <Avatar />
          </NavLink>
        </AvatarContainer>
      </StyledHeader>
    );
  }
}

export default Header;

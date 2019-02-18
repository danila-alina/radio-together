import React from 'react';

import {
  StyledHeader, Search,
  AvatarContainer, UserName, Avatar,
} from './Header.styled';

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Search placeholder="Search for music, people, radiostations" />
        <AvatarContainer>
          <UserName>Alina Arlova</UserName>
          <Avatar />
        </AvatarContainer>
      </StyledHeader>
    );
  }
}

export default Header;

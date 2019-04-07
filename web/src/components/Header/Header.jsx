import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userSelectors from 'resources/user/user.selectors';

import * as SC from './Header.styled';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <SC.StyledHeader>
        <SC.Search placeholder="Search for music, people, radiostations" />
        <SC.AvatarContainer>
          <SC.StyledNavLink to="/my-account">
            <SC.UserName>{`${user.firstName} ${user.lastName}`}</SC.UserName>
          </SC.StyledNavLink>
          <NavLink to="/my-account">
            <SC.Avatar />
          </NavLink>
        </SC.AvatarContainer>
      </SC.StyledHeader>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
  ])).isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: userSelectors.getUserInfo(state),
  };
};

export default connect(
  mapStateToProps,
)(Header);

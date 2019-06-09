import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as userActions from 'resources/user/user.actions';
import * as userSelectors from 'resources/user/user.selectors';

import * as SC from './Header.styled';

class Header extends React.Component {
  state = {
    searchValue: '',
  }

  componentDidMount() {
    const { isAuthorised } = this.props;

    if (isAuthorised) {
      this.props.getUserInfo();
    }
  }

  onSearchValuelChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {
    const { user } = this.props;
    const { searchValue } = this.state;

    return (
      <SC.StyledHeader>
        <SC.SearchContainer>
          <SC.Search
            placeholder="Search for tracks"
            value={searchValue}
            onChange={this.onSearchValuelChange}
          />
          <SC.SearchButtonContainer>
            <SC.SearchButton to={`/search-tracks/${searchValue}`}>
              Search
            </SC.SearchButton>
          </SC.SearchButtonContainer>
        </SC.SearchContainer>
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
  isAuthorised: PropTypes.bool.isRequired,
  getUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: userSelectors.getUserInfo(state),
    isAuthorised: userSelectors.getAuth(state),
  };
};

const mapDispatchToProps = {
  getUserInfo: userActions.getUserInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

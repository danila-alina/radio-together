import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import * as SC from './MenuPopup.styled';

class MenuPopup extends React.Component {
  handleClickOutside = (event) => {
    this.props.toggleMenu();
  }

  render() {
    const { options } = this.props;
    const renderOptions = options.map((option) => {
      return (
        <SC.Option key={option.id} onClick={option.action}>
          {option.name}
        </SC.Option>
      );
    });
    return (
      <SC.Menu>
        {renderOptions}
      </SC.Menu>
    );
  }
}

MenuPopup.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default onClickOutside(MenuPopup);

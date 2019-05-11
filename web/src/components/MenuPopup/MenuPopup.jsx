import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import * as SC from './MenuPopup.styled';

class MenuPopup extends React.Component {
  handleClickOutside = (event) => {
    this.props.toggleMenu();
  }

  render() {
    const { options, top, left } = this.props;
    const renderOptions = options.map((option) => {
      return (
        <SC.Option key={option.id} onClick={option.action}>
          {option.name}
        </SC.Option>
      );
    });
    return (
      <SC.Menu top={top} left={left}>
        {renderOptions}
      </SC.Menu>
    );
  }
}

MenuPopup.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  left: PropTypes.number,
  top: PropTypes.number,
};

MenuPopup.defaultProps = {
  left: 25,
  top: 5,
};

export default onClickOutside(MenuPopup);

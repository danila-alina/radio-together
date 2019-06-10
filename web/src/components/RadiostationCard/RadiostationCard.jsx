import React from 'react';
import PropTypes from 'prop-types';

import Spectrum from 'components/Spectrum';

import * as SC from './RadiostationCard.styled';

class RadiostationCard extends React.Component {
  render() {
    const {
      colors, userName, radiostationName, userId,
    } = this.props;
    return (
      <SC.CardContainer to={`/profile/${userId}`}>
        <SC.Card
          topColor={colors.top}
          bottomColor={colors.bottom}
        >
          <Spectrum />
          <SC.Info>
            <SC.UserName>{userName}</SC.UserName>
            <SC.RadiostationName>{radiostationName}</SC.RadiostationName>
          </SC.Info>
        </SC.Card>
      </SC.CardContainer>
    );
  }
}

RadiostationCard.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  userName: PropTypes.string.isRequired,
  radiostationName: PropTypes.string.isRequired,
  userId: PropTypes.string,
};

RadiostationCard.defaultProps = {
  userId: '',
};

export default RadiostationCard;

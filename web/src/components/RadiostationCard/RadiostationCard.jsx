import React from 'react';
import PropTypes from 'prop-types';

import Spectrum from 'components/Spectrum';

import {
  Card, UserName, RadiostationName, Info,
} from './RadiostationCard.styled';

class RadiostationCard extends React.Component {
  render() {
    const { colors, userName, radiostationName } = this.props;
    return (
      <Card
        topColor={colors.top}
        bottomColor={colors.bottom}
      >
        <Spectrum />
        <Info>
          <UserName>{userName}</UserName>
          <RadiostationName>{radiostationName}</RadiostationName>
        </Info>
      </Card>
    );
  }
}

RadiostationCard.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  userName: PropTypes.string.isRequired,
  radiostationName: PropTypes.string.isRequired,
};

export default RadiostationCard;

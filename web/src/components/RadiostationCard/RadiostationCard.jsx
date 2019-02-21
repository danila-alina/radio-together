import React from 'react';

import { Card } from './RadiostationCard.styled';

class RadiostationCard extends React.Component {
  render() {
    const { colors } = this.props
    return (
      <Card
        topColor={colors.top}
        bottomColor={colors.bottom}
      />
    );
  }
}

export default RadiostationCard;

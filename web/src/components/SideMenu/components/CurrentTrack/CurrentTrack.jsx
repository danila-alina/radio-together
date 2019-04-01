import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './CurrentTrack.styled';

class CurrentTrack extends React.Component {
  render() {
    const trackMinutes = 1;
    const trackSeconds = 30;
    const progress = 40;
    const color = '#A67BC1';
    return (
      <SC.TrackContainer>
        <SC.Cover cover="https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F1bc940fc0543d4b3193d0d8fee8012ba.1000x1000x1.jpg" />
        <SC.TrackInfo>
          <SC.TrackName>I'll Keep You Sane</SC.TrackName>
          <SC.ArtistName>Timmies, Mishaal</SC.ArtistName>
        </SC.TrackInfo>
        <SC.ProgressInfo>
          <SC.Time>
            {trackMinutes}
            :
            {trackSeconds < 10 ? `0${trackSeconds}` : trackSeconds}
          </SC.Time>
          <SC.ProgressContainer>
            <SC.Progress
              progress={progress}
              color={color}
            />
          </SC.ProgressContainer>
          <SC.Time>3:00</SC.Time>
        </SC.ProgressInfo>
      </SC.TrackContainer>
    );
  }
}

CurrentTrack.propTypes = {
};

CurrentTrack.defaultProps = {
};

export default CurrentTrack;

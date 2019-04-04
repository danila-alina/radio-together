import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as currentTrackSelectors from 'resources/currentTrack/currentTrack.selectors';
import * as currentTrackActions from 'resources/currentTrack/currentTrack.actions';

import * as styles from 'constants/styles';
import * as SC from './CurrentTrack.styled';

class CurrentTrack extends React.Component {
  render() {
    const { currentTrack } = this.props;

    if (!currentTrack.name) {
      return null;
    }

    const trackMinutes = 1;
    const trackSeconds = 30;
    const progress = 40;
    const trackColor = currentTrack.cover.colors.length
      ? currentTrack.cover.colors[0] : styles.selectedColor;

    return (
      <SC.TrackContainer>
        <SC.TrackInfoContainer>
          <SC.Cover cover={currentTrack.cover.url}>
            <SC.PlayButton />
          </SC.Cover>
          <SC.TrackInfo>
            <SC.TrackName>{currentTrack.name}</SC.TrackName>
            <SC.ArtistName>{currentTrack.artist}</SC.ArtistName>
          </SC.TrackInfo>
        </SC.TrackInfoContainer>
        <SC.ProgressInfo>
          <SC.ProgressContainer>
            <SC.Progress
              progress={progress}
              color={trackColor}
            />
          </SC.ProgressContainer>
        </SC.ProgressInfo>
        <SC.TrackSettings>
          <SC.TimeLeft>
            {trackMinutes}
            :
            {trackSeconds < 10 ? `0${trackSeconds}` : trackSeconds}
          </SC.TimeLeft>
          <SC.PlayButtons>
            <SC.PreviousTrack />
            <SC.PlayTrack />
            <SC.NextTrack />
          </SC.PlayButtons>
          <SC.TimeRight>3:00</SC.TimeRight>
        </SC.TrackSettings>
      </SC.TrackContainer>
    );
  }
}

CurrentTrack.propTypes = {
  currentTrack: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.array,
  ])).isRequired,
};

CurrentTrack.defaultProps = {
};

const mapStateToProps = (state) => {
  return {
    currentTrack: currentTrackSelectors.getCurrentTrack(state),
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentTrack);

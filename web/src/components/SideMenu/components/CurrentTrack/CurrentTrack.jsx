import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as currentTrackSelectors from 'resources/currentTrack/currentTrack.selectors';
import * as currentTrackActions from 'resources/currentTrack/currentTrack.actions';

import * as styles from 'constants/styles';
import * as SC from './CurrentTrack.styled';

class CurrentTrack extends React.Component {
  onPause = () => {
    const { pauseTrack } = this.props;
    pauseTrack();
  }

  onPlay = () => {
    const { playTrack } = this.props;
    playTrack();
  }

  render() {
    const { currentTrack, progress, status } = this.props;
    if (!currentTrack.name) {
      return null;
    }

    const duration = currentTrack.duration / 1000;
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);

    const trackMinutes = Math.floor(progress / 60);
    const trackSeconds = Math.floor(progress % 60);
    // const trackColor = currentTrack.cover.colors.length
    //   ? currentTrack.cover.colors[0] : styles.selectedColor;
    const trackColor = styles.selectedColor;
    const percentProgress = progress * 100 / duration;

    return (
      <SC.TrackContainer>
        <SC.TrackInfoContainer>
          <SC.Cover cover={currentTrack.cover.url} />
          <SC.TrackInfo>
            <SC.TrackName>{currentTrack.name}</SC.TrackName>
            <SC.ArtistName>{currentTrack.artist}</SC.ArtistName>
          </SC.TrackInfo>
        </SC.TrackInfoContainer>
        <SC.ProgressInfo>
          <SC.ProgressContainer>
            <SC.Progress
              progress={percentProgress}
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
            {status === 'playing'
              ? <SC.PauseTrack onClick={this.onPause} />
              : <SC.PlayTrack onClick={this.onPlay} />
            }
            <SC.NextTrack />
          </SC.PlayButtons>
          <SC.TimeRight>
            {durationMinutes}
            :
            {durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}
          </SC.TimeRight>
        </SC.TrackSettings>
      </SC.TrackContainer>
    );
  }
}

CurrentTrack.propTypes = {
  currentTrack: PropTypes.shape({
    album: PropTypes.string,
    appleMusicId: PropTypes.string,
    artist: PropTypes.string,
    composer: PropTypes.string,
    cover: PropTypes.object,
    duration: PropTypes.number,
    genres: PropTypes.array,
    name: PropTypes.string,
    url: PropTypes.string,
    _id: PropTypes.string,
  }),
  progress: PropTypes.number,
  status: PropTypes.string,
  pauseTrack: PropTypes.func.isRequired,
  playTrack: PropTypes.func.isRequired,
};

CurrentTrack.defaultProps = {
  currentTrack: {},
  progress: 0,
  status: 'stopped',
};

const mapStateToProps = (state) => {
  return {
    currentTrack: currentTrackSelectors.getTrackInfo(state),
    progress: currentTrackSelectors.getPlayedTime(state),
    status: currentTrackSelectors.getStatus(state),
  };
};

const mapDispatchToProps = {
  pauseTrack: currentTrackActions.pauseTrack,
  playTrack: currentTrackActions.playTrack,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentTrack);

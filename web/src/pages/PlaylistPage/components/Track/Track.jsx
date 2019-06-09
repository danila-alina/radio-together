import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as currentTrackSelectors from 'resources/currentTrack/currentTrack.selectors';
import * as currentTrackActions from 'resources/currentTrack/currentTrack.actions';

import PlayButton from '../PlayButton';

import * as SC from './Track.styled';

class Track extends React.Component {
  onPlayTrack = () => {
    const {
      setTrack,
      playTrack,
      track,
      currentTrackId,
      currentTrackStatus,
    } = this.props;

    if (currentTrackId !== track._id) {
      setTrack(track);
    } else if (currentTrackStatus !== 'playing') {
      playTrack();
    }
  }

  onPauseTrack = () => {
    const { pauseTrack } = this.props;
    pauseTrack();
  }

  render() {
    const {
      track, currentTrackId, currentTrackStatus,
    } = this.props;
    if (!track.name) {
      return null;
    }

    return (
      <SC.TrackContainer selected={currentTrackId === track._id}>
        <SC.CoverContainer>
          <SC.Cover src={track.cover.url} />
          <PlayButton
            isCurrentTrack={currentTrackId === track._id}
            currentTrackStatus={currentTrackStatus}
            onPlay={this.onPlayTrack}
            onPause={this.onPauseTrack}
          />
        </SC.CoverContainer>
        <SC.TrackInfo>
          <SC.TrackName>{track.name}</SC.TrackName>
          <SC.ArtistName>{track.artist}</SC.ArtistName>
        </SC.TrackInfo>
      </SC.TrackContainer>
    );
  }
}

Track.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    url: PropTypes.string,
    appleMusicId: PropTypes.string,
    cover: PropTypes.object,
  }),
  setTrack: PropTypes.func.isRequired,
  playTrack: PropTypes.func.isRequired,
  pauseTrack: PropTypes.func.isRequired,
  currentTrackId: PropTypes.string,
  currentTrackStatus: PropTypes.string,
};

Track.defaultProps = {
  track: {
    cover: {},
  },
  currentTrackId: '',
  currentTrackStatus: 'stopped',
};

const mapStateToProps = (state) => {
  return {
    currentTrackId: currentTrackSelectors.getTrackId(state),
    currentTrackStatus: currentTrackSelectors.getStatus(state),
  };
};

const mapDispatchToProps = {
  setTrack: currentTrackActions.setTrack,
  playTrack: currentTrackActions.playTrack,
  pauseTrack: currentTrackActions.pauseTrack,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Track);

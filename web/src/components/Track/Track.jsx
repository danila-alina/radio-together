import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as currentTrackSelectors from 'resources/currentTrack/currentTrack.selectors';
import * as trackActions from 'resources/track/track.actions';
import * as currentTrackActions from 'resources/currentTrack/currentTrack.actions';
import * as playlistActions from 'resources/playlist/playlist.actions';

import PlaylistMenu from './components/PlaylistMenu';

import * as SC from './Track.styled';

const stars = [1, 2, 3, 4, 5];

class Track extends React.Component {
  state = {
    showPlaylistMenu: false,
    hoveredStar: null,
    rating: null,
  };

  onPlaylistMenuClick = () => {
    const { showPlaylistMenu } = this.state;
    this.setState({
      showPlaylistMenu: !showPlaylistMenu,
    });
  }

  onAddToPlaylist = (playlistId) => {
    const { track, addTrackToPlaylist } = this.props;
    addTrackToPlaylist(track._id, playlistId)
      .then(() => {
        this.onPlaylistMenuClick();
      });
  }

  onRatingStarClick = (trackRating) => {
    const { track, rateTrack } = this.props;
    rateTrack(track._id, trackRating);
    this.setState({
      rating: trackRating,
    });
  }

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

  getPlayingButton = (trackId) => {
    const { currentTrackId, currentTrackStatus } = this.props;
    if (currentTrackId !== trackId) {
      return <SC.PlayButton onClick={this.onPlayTrack} />;
    }
    if (currentTrackStatus === 'playing') {
      return <SC.PauseButton onClick={this.onPauseTrack} />;
    }
    return <SC.PlayButton onClick={this.onPlayTrack} />;
  }

  render() {
    const { track } = this.props;
    const {
      showPlaylistMenu,
      hoveredStar,
      rating,
    } = this.state;

    return (
      <SC.TrackContiner background={showPlaylistMenu}>
        <SC.CoverContainer>
          <SC.Cover src={track.cover.url} />
          {this.getPlayingButton(track._id)}
        </SC.CoverContainer>
        <SC.TrackInfo>
          <SC.TrackName>{track.name}</SC.TrackName>
          <SC.ArtistName>{track.artist}</SC.ArtistName>
        </SC.TrackInfo>
        <SC.AdditionalInfo>
          <SC.TrackRating>
            {stars.map(item => (
              <SC.RatingStar
                key={item}
                highlighted={item <= hoveredStar || item <= rating}
                onMouseEnter={() => this.setState({ hoveredStar: item })}
                onMouseLeave={() => this.setState({ hoveredStar: null })}
                onClick={() => this.onRatingStarClick(item)}
              />
            ))}
          </SC.TrackRating>
          <SC.AddToPlaylistButton
            onClick={this.onPlaylistMenuClick}
          />
        </SC.AdditionalInfo>
        {showPlaylistMenu
          && (
            <PlaylistMenu
              toggleMenu={this.onPlaylistMenuClick}
              onAddToPlaylist={this.onAddToPlaylist}
            />
          )
        }
      </SC.TrackContiner>
    );
  }
}

Track.propTypes = {
  addTrackToPlaylist: PropTypes.func.isRequired,
  setTrack: PropTypes.func.isRequired,
  playTrack: PropTypes.func.isRequired,
  pauseTrack: PropTypes.func.isRequired,
  rateTrack: PropTypes.func.isRequired,
  currentTrackId: PropTypes.string,
  currentTrackStatus: PropTypes.string,
  track: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    url: PropTypes.string,
    album: PropTypes.string,
    composer: PropTypes.string,
    genres: PropTypes.array,
    duration: PropTypes.number,
    appleMusicId: PropTypes.string,
    cover: PropTypes.object,
  }).isRequired,
};

Track.defaultProps = {
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
  rateTrack: trackActions.rateTrack,
  setTrack: currentTrackActions.setTrack,
  playTrack: currentTrackActions.playTrack,
  pauseTrack: currentTrackActions.pauseTrack,
  addTrackToPlaylist: playlistActions.addTrackToPlaylist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Track);

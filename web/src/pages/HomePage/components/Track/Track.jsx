import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PlaylistMenu from '../PlaylistMenu';
import * as trackSelectors from 'resources/track/track.selectors';
import * as trackActions from 'resources/track/track.actions';
import * as SC from './Track.styled';

const stars = [1, 2, 3, 4, 5];

class Track extends React.Component {
  state = {
    showPlaylistMenu: false,
    hoveredStar: null,
  };

  onPlaylistMenuClick = () => {
    const { showPlaylistMenu } = this.state;
    this.setState({
      showPlaylistMenu: !showPlaylistMenu,
    });
  }

  onAddToPlaylist = (playlistId) => {
    const { track, addTrackToPlaylist } = this.props;
    addTrackToPlaylist(track._id, playlistId);
  }

  onRatingStarClick = (trackRating) => {
    const { track, rateTrack } = this.props;
    rateTrack(track._id, trackRating);
  }

  render() {
    const { track } = this.props;
    const { showPlaylistMenu, hoveredStar } = this.state;
    return (
      <SC.TrackContiner background={showPlaylistMenu}>
        <SC.Cover src={track.cover.url} />
        <SC.TrackInfo>
          <SC.TrackName>{track.name}</SC.TrackName>
          <SC.ArtistName>{track.artist}</SC.ArtistName>
        </SC.TrackInfo>
        <SC.AdditionalInfo>
          <SC.TrackRating>
            {stars.map(item => (
              <SC.RatingStar
                highlighted={item <= hoveredStar}
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
  track: PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    composer: PropTypes.string,
    genres: PropTypes.string,
    duration: PropTypes.string,
    appleMusicId: PropTypes.string,
    cover: PropTypes.shape,
  }).isRequired,
};

Track.defaultProps = {
};

const mapStateToProps = (state, props) => {
  const { track } = props;
  return {
    // track: trackSelectors.getTrackById(state, track._id),
  };
};

const mapDispatchToProps = {
  rateTrack: trackActions.rateTrack,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Track);

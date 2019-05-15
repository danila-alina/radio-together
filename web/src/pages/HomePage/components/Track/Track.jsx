import React from 'react';
import PropTypes from 'prop-types';

import PlaylistMenu from '../PlaylistMenu';
import * as SC from './Track.styled';

class Track extends React.Component {
  state = {
    showPlaylistMenu: false,
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

  render() {
    const { track } = this.props;
    const { showPlaylistMenu } = this.state;
    return (
      <SC.TrackContiner background={showPlaylistMenu}>
        <SC.Cover src={track.cover.url} />
        <SC.TrackInfo>
          <SC.TrackName>{track.name}</SC.TrackName>
          <SC.ArtistName>{track.artist}</SC.ArtistName>
        </SC.TrackInfo>
        <SC.AdditionalInfo>
          <SC.TrackRating>
            <SC.RatingStar />
            <SC.RatingStar />
            <SC.RatingStar />
            <SC.RatingStar />
            <SC.RatingStar />
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

export default Track;

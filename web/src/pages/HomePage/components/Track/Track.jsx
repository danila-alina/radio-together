import React from 'react';
import PropTypes from 'prop-types';

import PlaylistMenu from '../PlaylistMenu';
import {
  TrackContiner, Cover, TrackInfo, TrackName, ArtistName,
  AddToPlaylistButton, AdditionalInfo,
} from './Track.styled';

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
      <TrackContiner background={showPlaylistMenu}>
        <Cover src={track.cover.url} />
        <TrackInfo>
          <TrackName>{track.name}</TrackName>
          <ArtistName>{track.artist}</ArtistName>
        </TrackInfo>
        <AdditionalInfo>
          <AddToPlaylistButton
            onClick={this.onPlaylistMenuClick}
          />
        </AdditionalInfo>
        {showPlaylistMenu
          && (
            <PlaylistMenu
              toggleMenu={this.onPlaylistMenuClick}
              onAddToPlaylist={this.onAddToPlaylist}
            />
          )
        }
      </TrackContiner>
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

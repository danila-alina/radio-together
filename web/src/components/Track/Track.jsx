import React from 'react';
import PropTypes from 'prop-types';

import PlaylistMenu from 'components/PlaylistMenu';
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
    
  }

  render() {
    const { track, artist, cover } = this.props;
    const { showPlaylistMenu } = this.state;
    return (
      <TrackContiner>
        <Cover src={cover} />
        <TrackInfo>
          <TrackName>{track}</TrackName>
          <ArtistName>{artist}</ArtistName>
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
  track: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

Track.defaultProps = {
  cover: '',
};

export default Track;

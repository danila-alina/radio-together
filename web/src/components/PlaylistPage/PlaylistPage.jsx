import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getGradientColor } from 'services/getGradient';
import { getPlaylistById } from 'resources/playlist/playlist.actions';
import * as playlistSelectors from 'resources/playlist/playlist.selectors';

import Track from './components/Track';
import {
  Page, PlaylistInfoContainer, PlaylistCover, Cover,
  GeneratedCover, PlaylistImage, ChangeCover,
  PlaylistInfo, Playlist, PlaylistName, TrackListContainer,
} from './PlaylistPage.styled';

class PlaylistPage extends React.Component {
  state = {
    currentTrack: null,
  };

  componentDidMount() {
    const { playlistId } = this.props.match.params;
    this.props.getPlaylistById(playlistId);
  }

  onSelectTrack = (trackId) => {
    this.setState({
      currentTrack: trackId,
    });
  }

  onUploadImage = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imageFile: file,
      });
    };
  }

  render() {
    const { currentTrack } = this.state;
    const playlist = this.props.playlist || {};
    const tracks = playlist.tracks || [];
    const gradientColor = getGradientColor(this.props.match.params.playlistId);
    return (
      <Page>
        <PlaylistInfoContainer>
          <PlaylistCover>
            {playlist.cover
              ? <Cover cover={playlist.cover} />
              : (
                <GeneratedCover
                  topColor={gradientColor.topColor}
                  bottomColor={gradientColor.bottomColor}
                >
                  <PlaylistImage />
                </GeneratedCover>
              )
            }
            <ChangeCover onClick={this.onUploadImage}>
              Upload Image
            </ChangeCover>
            <input onChange={this.onUploadImage} type="file" />
          </PlaylistCover>
          <PlaylistInfo>
            <Playlist>Playlist</Playlist>
            <PlaylistName>{playlist.name}</PlaylistName>
          </PlaylistInfo>
        </PlaylistInfoContainer>
        <TrackListContainer>
          {tracks.map((track) => {
            return (
              <Track
                key={track._id}
                track={track.name}
                artist={track.artist}
                cover={track.cover}
                selected={currentTrack === track._id}
                onSelectTrack={() => this.onSelectTrack(track._id)}
              />
            );
          })}
        </TrackListContainer>
      </Page>
    );
  }
}

PlaylistPage.propTypes = {
  getPlaylistById: PropTypes.func.isRequired,
  playlist: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.array,
  ])).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  playlist: playlistSelectors.getCurrentPlaylist(state),
});

const mapDispatchToProps = {
  getPlaylistById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistPage);

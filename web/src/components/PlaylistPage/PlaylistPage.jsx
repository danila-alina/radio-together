import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getPlaylistById,
  uploadPlaylistCover,
  updatePlaylist,
} from 'resources/playlist/playlist.actions';
import { getGradientColor } from 'services/getGradient';
import * as playlistSelectors from 'resources/playlist/playlist.selectors';

import Track from './components/Track';
import {
  Page, PlaylistInfoContainer, PlaylistCover, Cover,
  GeneratedCover, PlaylistImage, FileInputContaier, FileInput,
  PlaylistInfo, Playlist, PlaylistName, TrackListContainer,
  PlaylistAdditional, EditButton, PlaylistNameInput, SaveButton,
} from './PlaylistPage.styled';

class PlaylistPage extends React.Component {
  state = {
    currentTrack: null,
    editPlaylist: false,
    playlistName: '',
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

    const { playlistId } = this.props.match.params;
    
    const file = event.target.files[0];
    const imageData = new FormData();
    imageData.append('image', file);

    this.props.uploadPlaylistCover(imageData)
      .then(({ payload }) => {
        this.props.updatePlaylist(playlistId, { cover: payload.cover});
      });
  }

  onPlaylistNameChange = (event) => {
    const name = event.target.value;
    this.setState({
      playlistName: name,
    });
  }

  onPlaylistSave = () => {
    const { playlistName } = this.state;
    const { playlistId } = this.props.match.params;
    this.props.updatePlaylist(playlistId, { name: playlistName })
      .then(() => {
        this.setState({
          editPlaylist: false,
        });
      });
  }

  onPlaylistEdit = () => {
    const { playlist } = this.props;
    this.setState({
      editPlaylist: true,
      playlistName: playlist.name,
    });
  }

  render() {
    const { currentTrack, editPlaylist, playlistName } = this.state;
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
            <FileInputContaier>
              <FileInput onChange={this.onUploadImage} />
              Upload Image
            </FileInputContaier>
          </PlaylistCover>
          <PlaylistInfo>
            <PlaylistAdditional>
              <Playlist>Playlist</Playlist>
              {editPlaylist
                ? <SaveButton onClick={this.onPlaylistSave}>Save</SaveButton>
                : <EditButton onClick={this.onPlaylistEdit} />
              }
            </PlaylistAdditional>
            {editPlaylist
              ? (
                <PlaylistNameInput
                  autoFocus
                  value={playlistName}
                  onChange={this.onPlaylistNameChange}
                />
              )
              : <PlaylistName>{playlist.name}</PlaylistName>
            }
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
  uploadPlaylistCover: PropTypes.func.isRequired,
  updatePlaylist: PropTypes.func.isRequired,
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

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;
  return {
    playlist: playlistSelectors.getCurrentPlaylist(playlistId, state),
  };
};

const mapDispatchToProps = {
  getPlaylistById,
  uploadPlaylistCover,
  updatePlaylist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistPage);

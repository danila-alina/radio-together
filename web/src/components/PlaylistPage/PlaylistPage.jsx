import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getGradientColor } from 'services/getGradient';
import * as playlistActions from 'resources/playlist/playlist.actions';
import * as currentTrackActions from 'resources/currentTrack/currentTrack.actions';
import * as playlistSelectors from 'resources/playlist/playlist.selectors';

import Track from './components/Track';
import MenuPopup from './components/MenuPopup';
import * as SC from './PlaylistPage.styled';

class PlaylistPage extends React.Component {
  state = {
    currentTrack: null,
    editPlaylist: false,
    showMoreOptions: false,
    playlistName: '',
  };

  componentDidMount() {
    const { playlistId } = this.props.match.params;
    this.props.getPlaylistById(playlistId);
  }

  onSelectTrack = (trackId) => {
    const { playlist } = this.props;
    const track = playlist.tracks.find((item) => {
      return item._id === trackId;
    });
    this.props.setCurrentTrack(track);
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
        this.props.updatePlaylist(playlistId, { cover: payload.cover });
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

  toggleOptionsMenu = () => {
    const { showMoreOptions } = this.state;
    this.setState({
      showMoreOptions: !showMoreOptions,
    });
  }

  onCopyLink = () => {
  }

  onDeletePlaylist = () => {
    const { playlistId } = this.props.match.params;
    this.props.deletePlaylist(playlistId)
      .then(() => {
        this.props.history.push('/my-music');
      });
  }

  onCancelEdit = () => {
    this.setState({
      editPlaylist: false,
    });
  }

  render() {
    const {
      currentTrack, editPlaylist, playlistName, showMoreOptions,
    } = this.state;
    const playlist = this.props.playlist || {};
    const tracks = playlist.tracks || [];
    const gradientColor = getGradientColor(this.props.match.params.playlistId);
    return (
      <SC.Page>
        <SC.PlaylistInfoContainer>
          <SC.PlaylistCover>
            {playlist.cover
              ? <SC.Cover cover={playlist.cover} />
              : (
                <SC.GeneratedCover
                  topColor={gradientColor.topColor}
                  bottomColor={gradientColor.bottomColor}
                >
                  <SC.PlaylistImage />
                </SC.GeneratedCover>
              )
            }
            <SC.FileInputContaier>
              <SC.FileInput onChange={this.onUploadImage} />
              Upload Image
            </SC.FileInputContaier>
          </SC.PlaylistCover>
          <SC.PlaylistInfo>
            <SC.PlaylistAdditional>
              <SC.Playlist>Playlist</SC.Playlist>
              <SC.PlaylistOptions>
                {editPlaylist
                  ? (
                    <React.Fragment>
                      <SC.SaveButton onClick={this.onPlaylistSave}>Save</SC.SaveButton>
                      <SC.CancelButton onClick={this.onCancelEdit} />
                    </React.Fragment>
                  )
                  : (
                    <React.Fragment>
                      <SC.EditButton onClick={this.onPlaylistEdit} />
                      <SC.MoreButton onClick={this.toggleOptionsMenu} />
                    </React.Fragment>
                  )
                }
                {showMoreOptions
                  && (
                    <MenuPopup
                      options={[{
                        id: 1,
                        name: 'Copy Link',
                        action: this.onCopyLink,
                      }, {
                        id: 2,
                        name: 'Delete Playlist',
                        action: this.onDeletePlaylist,
                      }]}
                      toggleMenu={this.toggleOptionsMenu}
                    />
                  )
                }
              </SC.PlaylistOptions>
            </SC.PlaylistAdditional>
            {editPlaylist
              ? (
                <SC.PlaylistNameInput
                  autoFocus
                  value={playlistName}
                  onChange={this.onPlaylistNameChange}
                />
              )
              : <SC.PlaylistName>{playlist.name}</SC.PlaylistName>
            }
          </SC.PlaylistInfo>
        </SC.PlaylistInfoContainer>
        <SC.TrackListContainer>
          {tracks.map((track) => {
            return (typeof track === 'object') && (
              <Track
                key={track._id}
                track={track.name}
                artist={track.artist}
                cover={track.cover.url}
                selected={currentTrack === track._id}
                onSelectTrack={() => this.onSelectTrack(track._id)}
              />
            );
          })}
        </SC.TrackListContainer>
      </SC.Page>
    );
  }
}

PlaylistPage.propTypes = {
  getPlaylistById: PropTypes.func.isRequired,
  uploadPlaylistCover: PropTypes.func.isRequired,
  updatePlaylist: PropTypes.func.isRequired,
  deletePlaylist: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  playlist: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.array,
  ])),
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

PlaylistPage.defaultProps = {
  playlist: {},
};

const mapStateToProps = (state, ownProps) => {
  const { playlistId } = ownProps.match.params;
  return {
    playlist: playlistSelectors.getCurrentPlaylist(playlistId, state),
  };
};

const mapDispatchToProps = {
  getPlaylistById: playlistActions.getPlaylistById,
  uploadPlaylistCover: playlistActions.uploadPlaylistCover,
  updatePlaylist: playlistActions.updatePlaylist,
  deletePlaylist: playlistActions.deletePlaylist,
  setCurrentTrack: currentTrackActions.setCurrentTrack,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistPage));

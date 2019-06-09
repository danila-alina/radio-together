import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getGradientColor } from 'services/getGradient';
import * as playlistActions from 'resources/playlist/playlist.actions';
import * as userActions from 'resources/user/user.actions';
import * as userSelectors from 'resources/user/user.selectors';
import * as playlistSelectors from 'resources/playlist/playlist.selectors';

import Loader from 'components/Loader';
import TrackList from './components/TrackList';
import PlaylistMenu from './components/PlaylistMenu';
import * as SC from './PlaylistPage.styled';

class PlaylistPage extends React.Component {
  state = {
    currentTrackId: null,
    editPlaylist: false,
    showMenu: false,
    isSetToRadiostation: false,
    playlistName: '',
    isLoading: true,
  };

  componentDidMount() {
    const { playlistId } = this.props.match.params;
    this.props.getPlaylistById(playlistId)
      .then(() => {
        this.setState({
          isLoading: false,
        });
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

  toggleMenu = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu,
    });
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

  onSetToRadiostation = () => {
    const { playlistId } = this.props.match.params;
    this.props.setPlaylistToRadiostation(playlistId)
      .then(() => {
        this.setState({
          isSetToRadiostation: true,
        });
      });
  }

  onUnsetFromRadiostation = () => {
    this.props.unsetRadiostation()
      .then(() => {
        this.setState({
          isSetToRadiostation: false,
        });
      });
  }

  render() {
    const {
      currentTrackId, editPlaylist, playlistName,
      showMenu, isSetToRadiostation, isLoading,
    } = this.state;
    if (isLoading) {
      return <Loader />;
    }

    const { playlist, radiostation } = this.props;
    const { playlistId } = this.props.match.params;
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
            <SC.PlaylistInfoTop>
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
                        <SC.MoreButton onClick={this.toggleMenu} />
                      </React.Fragment>
                    )
                  }
                  {showMenu
                    && (
                      <PlaylistMenu
                        onDeletePlaylist={this.onDeletePlaylist}
                        onSetToRadiostation={this.onSetToRadiostation}
                        onUnsetFromRadiostation={this.onUnsetFromRadiostation}
                        isSetToRadiostation={
                          isSetToRadiostation || radiostation.playlistId === playlistId
                        }
                        toggleMenu={this.toggleMenu}
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
            </SC.PlaylistInfoTop>
            {(isSetToRadiostation || radiostation.playlistId === playlistId)
              && (
                <SC.RadiostationContainer>
                  <SC.RadiostationIcon />
                  <SC.RadiostationText>At Radiostation</SC.RadiostationText>
                </SC.RadiostationContainer>
              )
            }
          </SC.PlaylistInfo>
        </SC.PlaylistInfoContainer>
        <TrackList
          tracks={tracks}
          currentTrackId={currentTrackId}
        />
      </SC.Page>
    );
  }
}

PlaylistPage.propTypes = {
  getPlaylistById: PropTypes.func.isRequired,
  uploadPlaylistCover: PropTypes.func.isRequired,
  updatePlaylist: PropTypes.func.isRequired,
  deletePlaylist: PropTypes.func.isRequired,
  setPlaylistToRadiostation: PropTypes.func.isRequired,
  unsetRadiostation: PropTypes.func.isRequired,
  playlist: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.array,
  ])),
  radiostation: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
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
    radiostation: userSelectors.getRadiostation(state),
  };
};

const mapDispatchToProps = {
  getPlaylistById: playlistActions.getPlaylistById,
  uploadPlaylistCover: playlistActions.uploadPlaylistCover,
  updatePlaylist: playlistActions.updatePlaylist,
  deletePlaylist: playlistActions.deletePlaylist,
  setPlaylistToRadiostation: userActions.setPlaylistToRadiostation,
  unsetRadiostation: userActions.unsetRadiostation,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistPage));

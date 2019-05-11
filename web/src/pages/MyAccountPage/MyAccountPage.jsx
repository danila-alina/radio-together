import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as userActions from 'resources/user/user.actions';
import * as userSelectors from 'resources/user/user.selectors';

import AccountInfo from './components/AccountInfo';
import Track from './components/Track';
import PlaylistCover from './components/PlaylistCover';

import * as SC from './MyAccountPage.styled';

class MyAccountPage extends React.Component {
  state = {
    currentTrackId: null,
  };

  componentDidMount() {
    this.props.getRadiostation();
  }

  onSelectTrack = (trackId) => {
    this.setState({
      currentTrackId: trackId,
    });
  }

  render() {
    const { currentTrackId } = this.state;
    const { radiostation } = this.props;
    const playlist = radiostation.playlist || {};
    const tracks = playlist.tracks || [];

    return (
      <SC.StyledPage>
        <AccountInfo />
        <SC.Title>Radiostation</SC.Title>

        <SC.RadiostationSection>
          {radiostation.playlistId
            && (
              <React.Fragment>
                <SC.PlaylistInfoContainer>
                  <PlaylistCover
                    playlistId={radiostation.playlistId}
                    cover={playlist.cover}
                  />
                  <SC.PlaylistInfo>
                    <SC.Playlist>Playlist</SC.Playlist>
                    <SC.PlaylistName>{playlist.name}</SC.PlaylistName>
                  </SC.PlaylistInfo>
                </SC.PlaylistInfoContainer>

                <SC.TracksList>
                  {tracks.map((track, index) => {
                    return (
                      <Track
                        key={track._id}
                        track={track.name}
                        artist={track.artist}
                        cover={track.cover.url}
                        selected={currentTrackId === track._id}
                        onSelectTrack={() => this.onSelectTrack(track._id)}
                      />
                    );
                  })}
                </SC.TracksList>
              </React.Fragment>
            )
          }
        </SC.RadiostationSection>
      </SC.StyledPage>
    );
  }
}

MyAccountPage.propTypes = {
  getRadiostation: PropTypes.func.isRequired,
  radiostation: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ])).isRequired,
};

const mapStateToProps = (state) => {
  return {
    radiostation: userSelectors.getRadiostation(state),
  };
};

const mapDispatchToProps = {
  getRadiostation: userActions.getRadiostation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountPage);

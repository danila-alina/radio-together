import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as userActions from 'resources/user/user.actions';
import * as userSelectors from 'resources/user/user.selectors';

import AccountInfo from './components/AccountInfo';
import Track from './components/Track';
import PlaylistCover from './components/PlaylistCover';

import * as SC from './ProfilePage.styled';

class ProfilePage extends React.Component {
  componentDidMount() {
    const { getUserRadiostation } = this.props;
    const { userId } = this.props.match.params;
    getUserRadiostation(userId);
  }

  render() {
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

ProfilePage.propTypes = {
  getUserRadiostation: PropTypes.func.isRequired,
  radiostation: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ])),
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  userId: PropTypes.string.isRequired,
};

ProfilePage.defaultProps = {
  radiostation: {},
};

const mapStateToProps = (state, props) => {
  const { userId } = props.match.params;
  return {
    radiostation: userSelectors.getUserRadiostation(state, userId),
  };
};

const mapDispatchToProps = {
  getUserRadiostation: userActions.getUserRadiostation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
